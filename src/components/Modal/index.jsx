import './styled.css';

import React from 'react';
import ReactDOM from 'react-dom';
import usePortal from 'src/hooks/use-portal';

const Modal = ({ active, setActive, children }) => {
    const portal = usePortal();

    return (
        portal &&
        ReactDOM.createPortal(
            <div
                className={active ? 'modal active' : 'modal'}
                onClick={() => setActive(false)}
            >
                <div
                    className={
                        active ? 'modal_content active' : 'modal_content'
                    }
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>,
            portal,
        )
    );
};
export default Modal;
