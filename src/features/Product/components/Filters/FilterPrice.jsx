import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';

FilterPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterPrice({ onChange }) {
  const theme = useTheme();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);

    // Reset the values after submit
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box padding={2} sx={{ borderTop: `1px solid ${theme.palette.grey[300]}` }}>
      <Typography variant="subtitle2">Giá Sản Phẩm</Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'row nowrap',
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        }}
      >
        <TextField size="small" name="salePrice_gte" label="Từ" value={values.salePrice_gte} onChange={handleChange} />
        <span style={{ margin: '0 8px ' }}>-</span>
        <TextField size="small" name="salePrice_lte" label="Đến" value={values.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="primary" onClick={handleSubmit} size="small">
        Lọc
      </Button>
    </Box>
  );
}

export default FilterPrice;
