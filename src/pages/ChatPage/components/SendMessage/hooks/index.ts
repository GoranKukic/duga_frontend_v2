import { useMutation } from '@tanstack/react-query';
import { uploadMessagePhotos } from '../../../../../api/uploads';

export const useUploadMessageImage = () => {
  const {
    mutate: uploadMessageImage,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (data: FormData) => uploadMessagePhotos(data),
  });

  return { uploadMessageImage, isError, isSuccess };
};
