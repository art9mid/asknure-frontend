export const addPostCommentValidation = () => {
  return (value) => {
    const errors = {};

    if (!value?.text) {
      errors.text = 'Это поле не может быть пустым';
    }

    return errors;
  };
};
