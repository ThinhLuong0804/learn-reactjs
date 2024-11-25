import React from 'react';
import PropTypes from 'prop-types';
import FilterCategory from './Filters/FilterCategory';

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

  return <FilterCategory onChange={handleCategoryChange} />;
}

export default ProductFilters;
