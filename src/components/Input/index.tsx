import { forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  type: string;
  onFocus?: () => void;
}

const inputStyles = `bg-white focus:outline-none focus:shadow-outline border border-gray-200 rounded py-[6px] px-4 pr-8 block w-full appearance-none leading-normal focus:border-blue`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, type, className, onChange, icon, value, defaultValue, onFocus, ...props },
    ref
  ) => {
    return icon ? (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className={`${inputStyles} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          type={type}
          onFocus={onFocus}
        />
        {icon && <span className="absolute right-3 top-[10px]">{icon}</span>}
      </div>
    ) : (
      <input
        {...props}
        ref={ref}
        className={`${inputStyles} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        type={type}
        onFocus={onFocus}
      />
    );
  }
);

export default Input;
