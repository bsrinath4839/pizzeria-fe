import './index.scss';
import { Modal as MaterialModal } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    children,
    className,
    disableBackdropClick,
    disableEscapeKeyDown,
    open,
    title,
    onClose,
}) => {
    return (
        <MaterialModal
            className="modal"
            disableBackdropClick={disableBackdropClick}
            disableEscapeKeyDown={disableEscapeKeyDown}
            open={open}
            onClose={onClose}
        >
            <div className={className}>
                <div className="title-bar">
                    <div className="btn-close">
                        <button onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-title">
                        {title}
                    </div>
                </div>
                <div className="children">
                    {children}
                </div>
            </div>
        </MaterialModal>
    );
};

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    disableBackdropClick: PropTypes.bool,
    disableEscapeKeyDown: PropTypes.bool,
};

export default Modal;
