import './index.scss';
import React from 'react'
import PropTypes from 'prop-types'

const CardContent = ({
    className,
    children,
}) => {
    return (
        <div className={`card-content ${className}`}>
            {children}
        </div>
    )
}

CardContent.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

export default CardContent;
