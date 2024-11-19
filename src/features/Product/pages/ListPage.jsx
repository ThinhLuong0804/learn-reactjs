import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

ListPage.propTypes = {};

function ListPage(props) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const params = {
        _page: 1,
        _limit: 12,
      };

      // .data ở cuối để chỉ lấy data mà không có pagination
      try {
        const { data } = await productApi.getAll(params);
        console.log(data);
        setProductList(data);
      } catch (error) {
        console.log('Failt');
      }

      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1440px', margin: '0 auto', padding: '16px' }}>
        <Grid container spacing={1}>
          <Grid item width="253px">
            <Paper elevation={0}>Item 1</Paper>
          </Grid>

          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
