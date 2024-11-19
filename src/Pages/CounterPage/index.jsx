import React from 'react';
import PropTypes from 'prop-types';
import CounterFeature from '../../features/Counter';

CounterPage.propTypes = {};

function CounterPage(props) {
  return (
    <div>
      <CounterFeature />
    </div>
  );
}

export default CounterPage;
