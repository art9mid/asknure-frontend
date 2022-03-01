import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useFormik } from 'formik';
import { clearFormErrorState } from '../redux/thunks/errors';

// no param to clear all;
export function useInitialClearFormErrors(error) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(clearFormErrorState(error));
  }, []);
}

/**
 *
 * @param formikConfig
 * @param errorType - error field name in redux
 * @return FormikConfig
 */

export function useFormikWithErrorAutoClear(formikConfig, errorType) {
  const error = useSelector((state) => state.errors[errorType]);
  const formik = useFormik(formikConfig);
  const dispatch = useDispatch();

  function editCallback() {
    dispatch(clearFormErrorState(errorType));
  }

  React.useLayoutEffect(() => {
    dispatch(clearFormErrorState(errorType));

    return () => {
      dispatch(clearFormErrorState(errorType));
    };
  }, []);

  React.useEffect(() => {
    if (error) {
      const errorField = error.getField();
      if (errorField.field) {
        formik.setFieldError(errorField.field, errorField.message);
      }

      if (error.autoHideDuration) {
        setTimeout(() => {
          dispatch(clearFormErrorState(errorType));
        }, error.autoHideDuration);
      }
    }
  }, [error]);

  formik.onValueChange = (field) => {
    return function (value) {
      editCallback();
      formik.handleChange(field)(value);
    };
  };

  return { error, formik };
}
