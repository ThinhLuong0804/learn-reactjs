import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputFiled.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputFiled({ form, name, label, disabled }) {
  // const { errors } = form.formState;
  const { errors } = form.formState;
  const { formState, trigger } = form;

  //show lỗi chỉ khi touch vào ô input, còn không sẽ hiện lỗi nhưng không màu đỏ
  // const hasError = formState.touchedFields[name] && errors[name];

  // show lỗi khi khi không nhập và không cần phải touch vào ô input
  const hasError = errors[name];

  // console.log('Form:', form);
  // console.log('Errors:', errors);
  // console.log('Form State:', form.formState);

  return (
    <Controller
      name={name}
      control={form.control}
      margin="normal"
      variant="outlined"
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message} // Chỉ hiển thị helperText khi có lỗi
          // onBlur={async (event) => {
          //   field.onBlur(); // Gọi hàm onBlur của react-hook-form
          //   await trigger(name); // Kích hoạt xác thực khi ô nhập liệu mất tiêu điểm
          // }}
        />
      )}
    />
  );
}

export default InputFiled;
