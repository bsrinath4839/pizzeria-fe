import './index.scss';
import React from 'react'
import PropTypes from 'prop-types'

const CardActions = ({
    children,
    className,
}) => {
    return (
        <div className={`card-actions  ${className}`}>
            {children}
        </div>
    )
}

CardActions.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
}

export default CardActions
