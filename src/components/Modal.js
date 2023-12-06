import React from 'react';

const Modal = ({ showModal, children, onClose }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;