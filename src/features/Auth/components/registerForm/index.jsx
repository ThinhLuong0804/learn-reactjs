import React from 'react';
import PropTypes from 'prop-types';
import InputFiled from '../../../../components/Form-Controls/InputFiled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import PasswordFiled from '../../../../components/Form-Controls/PasswordFiled';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function RegisterForm({ onSubmit }) {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required('Please enter your full name')
        .test('should has a least two words', 'Please enter a least two words', (value) => {
          return value.split(' ').length >= 2;
        }),
      email: yup.string().required('Please enter your email').email('Invalid email format'),
      password: yup.string().required('Please enter your password').min(6, 'Password must be at least 6 characters'),
      retypedPassword: yup
        .string()
        .required('Please enter your password')
        .oneOf([yup.ref('password')], 'Password does not match'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      retypedPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  const handleSubmit = async (values) => {
    console.log('Form Submitted: ', values);
    if (onSubmit) {
      await onSubmit(values);
    }

    // form.reset();
  };

  return (
    <div style={{ position: 'relative' }}>
      {isSubmitting && <LinearProgress sx={{ position: 'absolute', top: '-8px', left: '0', right: '0', zIndex: 1 }} />}

      <Avatar sx={{ margin: 'auto', backgroundColor: 'secondary.main' }}>
        <LockClockOutlined></LockClockOutlined>
      </Avatar>

      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', margin: '16px 0 24px 0' }}>
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputFiled name="fullName" label="Full name" form={form} />
        <InputFiled name="email" label="Email" form={form} />
        <PasswordFiled name="password" label="Password" form={form} />
        <PasswordFiled name="retypedPassword" label="Retyped Password" form={form} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ margin: '24px 0 16px 0' }}
          disabled={isSubmitting}
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
