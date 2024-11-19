import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  return (
    <Box padding={1}>
      <Box padding={1}>
        {product.images ? (
          <img
            src={product.images[0]}
            alt={product.name}
            style={{ width: '100%', height: '220px' }} // Tùy chỉnh kích thước ảnh
          />
        ) : (
          <img
            src={'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg'}
            alt={product.name}
            style={{ width: '100%' }} // Tùy chỉnh kích thước ảnh
          />
        )}
      </Box>
      {/* <Skeleton variant="rectangular" width="100%" height={118} /> */}
      <Typography variant="body2" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        {product.name}
      </Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
      </Typography>

      <Typography>{product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}</Typography>
    </Box>
  );
}

export default Product;
