export const addPostValidation = () => {
  return (value) => {
    const errors = {};

    if (!value?.title) {
      errors.title = 'Это поле не может быть пустым';
    } else if (value?.title && value?.title?.length < 10) {
      errors.title = 'Меньше 10ти символов';
    }

    return errors;
  };
};
