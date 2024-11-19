import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Grid2, Skeleton } from '@mui/material';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

function ProductSkeletonList({ length = 8 }) {
  return (
    <Box>
      <Container>
        <Grid container>
          {Array.from(new Array(length)).map((x, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rectangular" width="100%" height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductSkeletonList;