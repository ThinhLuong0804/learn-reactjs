import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordFiled.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordFiled({ form, name, label, disabled }) {
  // const { errors } = form.formState;
  const { errors } = form.formState;
  const { formState, trigger } = form;

  //show lỗi chỉ khi touch vào ô input, còn không sẽ hiện lỗi nhưng không màu đỏ
  // const hasError = formState.touchedFields[name] && errors[name];

  // show lỗi khi khi không nhập và không cần phải touch vào ô input
  const hasError = errors[name];
  const [showPassword, setShowPassword] = useState(false);

  // console.log('Form:', form);
  // console.log('Errors:', errors);
  // console.log('Form State:', form.formState);

  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      {/* <Controller
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
      /> */}

      <FormControl fullWidth margin="normal" variant="outlined" error={!!hasError}>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              id={name}
              type={showPassword ? 'text' : 'password'}
              label={label}
              disabled={disabled}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    // onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordFiled;
