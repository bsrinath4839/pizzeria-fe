import './index.scss';
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
    className,
    value,
    onClick
}) => {
    return (
        <button
            className={`btn btn-${className}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onClick: PropTypes.func,
};

export default Button;
