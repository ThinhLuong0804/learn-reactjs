import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
}

export default ProductFeature;
