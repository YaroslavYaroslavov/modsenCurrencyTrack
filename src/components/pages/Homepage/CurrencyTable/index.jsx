import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';

const CurrencyTable = React.memo(({ children, type }) => {
  return (
    <div className="tableWrapper">
      <span className="tableHeader">{type}</span>
      <div className="tableBody">{children}</div>
    </div>
  );
});
CurrencyTable.displayName = 'CurrencyTable';
CurrencyTable.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string,
};

export default CurrencyTable;
