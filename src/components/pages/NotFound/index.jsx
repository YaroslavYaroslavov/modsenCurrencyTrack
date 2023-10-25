import './styled.css';

import React from 'react';
import { Link } from 'react-router-dom';

import paths from 'src/constants/paths';
import notFoundPageConfig from './config';

const { homepagePath } = paths;

const { notFoundMessage, linlToHomepageText } = notFoundPageConfig;
const NotFound = () => {
  return (
    <div className="notFounded">
      {notFoundMessage}
      {<Link to={homepagePath}>{<span className="link">{linlToHomepageText}</span>}</Link>}
    </div>
  );
};
export default NotFound;
