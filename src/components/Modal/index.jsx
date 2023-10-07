import './styled.css';

import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ active, setActive, children }) => {
    return ReactDOM.createPortal(
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
            onKeyDown={() => {
                setActive(false);
            }}
        >
            <div
                className={active ? 'modal_content active' : 'modal_content'}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.getElementById('modal-root'),
    );
};
