import React from 'react';
import PropTypes from 'prop-types';
import FilterCategory from './Filters/FilterCategory';
import FilterPrice from './Filters/FilterPrice';
import { Box } from '@mui/material';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      categoryId: newCategoryId,
    };

    return onChange(newFilters);
  };

  const handlePriceChange = (priceValues) => {
    if (!onChange) return;

    // Cập nhật giá trị lọc giá và truyền vào onChange
    const newFilters = {
      ...filters,
      ...priceValues, // Kết hợp các giá trị giá lọc
    };

    onChange(newFilters);
  };

  return (
    <Box>
      <FilterCategory onChange={handleCategoryChange} />
      <FilterPrice onChange={handlePriceChange}></FilterPrice>
    </Box>
  );
}

export default ProductFilters;
