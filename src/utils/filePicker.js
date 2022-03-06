import DocumentPicker, { types } from 'react-native-document-picker';

export const FILE_SIZE_CODE = 'FILE_SIZE';
export const MAX_FILE_SIZE = 104857600;

const filePicker = (...options) => {
  const allowedTypes = [
    types.images,
    types.zip,
    types.xls,
    types.xlsx,
    types.pdf,
    types.doc,
    types.docx,
    types.csv,
    types.plainText,
  ];

  return DocumentPicker.pick({
    type: allowedTypes,
    ...options,
  })
    .then((response) => {
      response.forEach((file) => {
        if (file.size >= MAX_FILE_SIZE) {
          throw new Error(FILE_SIZE_CODE);
        }
      });
      return response;
    })
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Something went wrong');
    });
};

export default filePicker;
