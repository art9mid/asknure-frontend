export const addPostValidation = () => {
  return (value) => {
    const errors = {};

    if (!value.text) {
      errors.text = 'Это поле не может быть пустым';
    } else if (value.text && errors.text.length < 10) {
      errors.text = 'Меньше 10ти символов';
    }

    return errors;
  };
};
