import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  return (
    <Box padding={1}>
      {/* {product.images &&
        product.images.map((image, index) => (
        //   <img
        //     key={index}
        //     src={image}
        //     alt={`Product Image ${index + 1}`}
        //     style={{ width: '100px', height: 'auto', margin: '5px' }} // Tùy chỉnh kích thước ảnh
        //   />
        ))} */}

      <Skeleton variant="rectangular" width="100%" height={118} />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} -{product.promotionPercent}
      </Typography>
    </Box>
  );
}

export default Product;
