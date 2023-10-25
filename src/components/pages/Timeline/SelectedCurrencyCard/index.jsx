import './styled.css';

import PropTypes from 'prop-types';
import React, { memo } from 'react';
import currencyIcons from 'src/constants/currencyIcons';

const SelectedCurrencyCard = memo(({ selectedCurrency, handleOpenModal }) => {
  const { icon, code, displayName } = currencyIcons[selectedCurrency];
  return (
    <div className="selectedCurrency" onClick={handleOpenModal}>
      <img className="currencyIco" src={icon} alt={code} />
      <div className="currencyTextInfoWrapper">
        <div className="currencyTextTitle">{displayName}</div>
        <div className="currencyTextCode">{code}</div>
      </div>
    </div>
  );
});
SelectedCurrencyCard.propTypes = {
  selectedCurrency: PropTypes.string,
  handleOpenModal: PropTypes.func,
};
export default SelectedCurrencyCard;
