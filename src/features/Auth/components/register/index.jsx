import React from 'react';
import RegisterForm from '../registerForm';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog = null }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    console.log('Form Submit: ', values);

    try {
      const resultAction = await dispatch(register(values));
      const user = unwrapResult(resultAction);

      // close diaglog
      if (closeDialog) {
        closeDialog();
      }

      // Do something after register success
      console.log('New User', user);
      enqueueSnackbar('Register successfully', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
