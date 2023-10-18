import './styled.css';

import React from 'react';
import { Link } from 'react-router-dom';

import notFoundPageConfig from './config';
const { notFoundMessage, linlToHomepageText } = notFoundPageConfig;
const NotFound = () => {
  return (
    <div className="notFounded">
      {notFoundMessage}
      {<Link to={'/'}>{<span className="link">{linlToHomepageText}</span>}</Link>}
    </div>
  );
};
export default NotFound;
