import './styled.css';

import React from 'react';

const CurrencyTable = ({ children, type }) => {
    return (
        <div className="tableWrapper">
            <div className="tableHeader">{type}</div>
            <div className="tableBody">{children}</div>
        </div>
    );
};
export default CurrencyTable;
