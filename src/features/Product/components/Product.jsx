import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const fallbackImage =
    'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg';
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <Box padding={1} maxWidth="330px">
      <Box padding={1} minHeight="240px">
        {product.images && (
          <img
            src={product.images[0]}
            onError={handleImageError}
            alt={product.name}
            style={{ width: '100%', height: '220px' }} // Tùy chỉnh kích thước ảnh
          />
        )}
      </Box>

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
