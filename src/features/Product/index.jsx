import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

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
