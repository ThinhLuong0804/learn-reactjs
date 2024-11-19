import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from '../../userSlice';
import LoginForm from '../loginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog = null }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const resultAction = await dispatch(login(values));
      unwrapResult(resultAction);

      // close diaglog
      if (closeDialog) {
        closeDialog();
      }

      // Do something after register success
      enqueueSnackbar('Login successfully', { variant: 'success' });
    } catch (error) {
      console.log('Failed to Login', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
