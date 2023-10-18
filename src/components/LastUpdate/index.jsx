import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';
import getDataFromLocalStorage from 'src/helpers/getDataFromLocalStorage';

import lastUpdateConfig from './config';

const { errorText, loadingText } = lastUpdateConfig;

const LastUpdate = ({ error, isLoading }) => {
  const { lastUpdated } = getDataFromLocalStorage();

  const timeLastUpdate = new Date(lastUpdated);
  const ampm = timeLastUpdate.getHours() >= 12 ? 'pm' : 'am';

  const timeLastUpdateString = `Last updated at ${
    timeLastUpdate.getHours() % 12
  }:${timeLastUpdate.getMinutes()}${ampm}`;

  return (
    <div className="lastupdate">
      <div
        className={'indicator'}
        data-status={error ? 'error' : isLoading ? 'loading' : 'success'}
      ></div>
      <div className="lastupdate-text">
        {error ? errorText : isLoading ? loadingText : timeLastUpdateString}
      </div>
    </div>
  );
};
LastUpdate.propTypes = {
  isLoading: PropTypes.bool,
  lastUpdated: PropTypes.string,
};
export default LastUpdate;
