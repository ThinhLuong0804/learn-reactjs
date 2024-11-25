import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
  onChange: PropTypes.func,
  currentSort: PropTypes.string,
};

function ProductSort({ onChange = null, currentSort = '' }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs onChange={handleSortChange} value={currentSort}>
      <Tab label="Giá cao tới thấp" value="salePrice-DESC"></Tab>
      <Tab label="Giá thấp tới cao" value="salePrice-ASC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
