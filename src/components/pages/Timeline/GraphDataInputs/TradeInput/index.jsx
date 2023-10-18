import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';

import tradeInputConfig from './config';

const TradeInput = ({ setValue, label, value }) => {
  const checkLength = (e) => {
    if (e.target.value.length > tradeInputConfig.maxInputLength) {
      return false;
    } else return true;
  };
  const handleChangeInput = (e) => {
    checkLength(e) && setValue(e);
  };

  return (
    <label className="labelInput">
      {label}
      <input
        type="number"
        onChange={handleChangeInput}
        placeholder={label}
        value={value || ''}
        className="tradeInput"
      />
    </label>
  );
};

TradeInput.propTypes = {
  setValue: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.number,
};
export default TradeInput;
