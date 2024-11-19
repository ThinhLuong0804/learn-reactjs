import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Grid2, Skeleton } from '@mui/material';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data }) {
  return (
    <Box>
      <Container disableGutters>
        <Grid container>
          {data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              {/* <Box height="100%" sx={{ border: '1px solid rgb(235, 235, 240)', borderRadius: 1, margin: '5px 5px' }}> */}
              <Product product={product} />
              {/* </Box> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductList;
