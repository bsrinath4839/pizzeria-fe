import './index.scss';
import React from 'react'
import PropTypes from 'prop-types';

const Card = ({
    className,
    children
}) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    );
};

Card.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

export default Card;
