import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';

ListPage.propTypes = {};

function ListPage(props) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 10,
    page: 1,
  });

  // const [sort, setSort] = useState({
  //   sort: 'salePrice',
  //   other: 'ASC',
  // });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'salePrice',
    _order: 'ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failt');
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    const [currenSort, order] = newSortValue.split('-');

    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: currenSort,
      _order: order,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
      _page: 1, // Reset về trang 1 khi thay đổi bộ lọc
    }));
  };

  return (
    <Box>
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1440px', margin: '0 auto', padding: '16px' }}>
        <Grid container spacing={1}>
          <Grid item width="253px">
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFiltersChange} />
            </Paper>
          </Grid>

          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>
              <ProductSort onChange={handleSortChange} currentSort={`${filters._sort}-${filters._order}`}></ProductSort>

              {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}

              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'nowrap',
                  justifyContent: 'center',
                  marginTop: '20px',
                  paddingBottom: '10px',
                }}
              >
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
