import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, styled, Typography } from '@mui/material';
import categoryAPI from '../../../../api/categoryApi';

FilterCategory.propTypes = {
  onChange: PropTypes.func,
};

const StyleUl = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,

  display: 'flex',
  flexDirection: 'column',

  '& > li': {
    listStyle: 'none',
    marginTop: theme.spacing(1),
    cursor: 'pointer',
    transition: 'all 0.25s',

    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

function FilterCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryAPI.getAll();
        console.log(list);

        setCategoryList(list);
      } catch (error) {
        console.log('Failt to fetch data Category');
      }
    })();
  }, []);

  const handleCategoryChange = (category) => {
    return onChange(category.id);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <StyleUl>
        {categoryList.map((category) => (
          <li
            onClick={() => {
              handleCategoryChange(category);
            }}
            key={category.id}
          >
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </StyleUl>
    </Box>
  );
}

export default FilterCategory;
