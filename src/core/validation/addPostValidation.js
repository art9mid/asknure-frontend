export const addPostValidation = (t) => {
  return (value) => {
    const errors = {};

    if (!value?.title) {
      errors.title = t('This field can not be empty');
    } else if (value?.title && value.title.trim().length < 2) {
      errors.title = t('Less than num characters', { num: 2 });
    }

    if (value?.text && value.text.trim().length < 10) {
      errors.text = t('Less than num characters', { num: 10 });
    }

    return errors;
  };
};
