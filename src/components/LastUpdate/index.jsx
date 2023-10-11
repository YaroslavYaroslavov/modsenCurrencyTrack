import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';

import LastUpdateConfig from './config';
const LastUpdate = ({
    error,
    isLoading,
    lastUpdated = '2023-09-19T00:00:00Z',
}) => {
    const timeLastUpdate = new Date(lastUpdated);
    const ampm = timeLastUpdate.getHours() >= 12 ? 'pm' : 'am';
    return (
        <div className="lastupdate">
            <div
                className={`indicator ${error && 'error'} ${
                    isLoading ? LastUpdateConfig.LOADING_TEXT : ''
                }`}
            ></div>
            <div className="lastupdate-text">
                {error
                    ? LastUpdateConfig.ERROR_TEXT
                    : isLoading
                    ? LastUpdateConfig.LOADING_TEXT
                    : `Last updated at ${timeLastUpdate.getHours() % 12}:
                ${timeLastUpdate.getMinutes()}${ampm}`}
            </div>
        </div>
    );
};
LastUpdate.propTypes = {
    isLoading: PropTypes.bool,
    lastUpdated: PropTypes.string,
};
export default LastUpdate;
