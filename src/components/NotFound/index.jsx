import './styled.css';

import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notFounded ">
            Uh, it seems we havent done that yet. The best solution would be to
            go {<Link to={'/'}>{<span className="link">Homepage</span>}</Link>}
        </div>
    );
};
export default NotFound;
