import { forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  type: string;
  onFocus?: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyles = `bg-white focus:outline-none focus:shadow-outline border border-gray-200 rounded px-4 block w-full appearance-none leading-normal focus:border-blue`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type,
      className,
      onChange,
      icon,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    return icon ? (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className={`${inputStyles} ${className} pl-10`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {icon && <span className="absolute left-3 top-[8px]">{icon}</span>}
      </div>
    ) : (
      <input
        {...props}
        ref={ref}
        className={`${inputStyles} ${className} py-2`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
);

export default Input;
