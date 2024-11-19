import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

import { styled } from '@mui/system';

CounterFeature.propTypes = {};

// Tạo component tùy chỉnh với các kiểu CSS
const MyButton = styled('button')({
  backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: 'white',
  margin: '0px 5px',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease', // Thêm transition cho hiệu ứng mờ
  '&:hover': {
    opacity: 0.7, // Giảm độ mờ khi hover
  },
});

function CounterFeature(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };
  return (
    <div>
      Counter: {count}
      <div>
        <MyButton onClick={handleIncreaseClick}>Increase</MyButton>
        <MyButton onClick={handleDecreaseClick}>Decrease</MyButton>
      </div>
    </div>
  );
}

export default CounterFeature;
