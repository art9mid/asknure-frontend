export const addPostValidation = () => {
  return (value) => {
    const errors = {};

    if (!value?.title) {
      errors.title = 'Это поле не может быть пустым';
    } else if (value?.title && value?.title?.length < 20) {
      errors.title = 'Меньше 20ти символов';
    }

    return errors;
  };
};
