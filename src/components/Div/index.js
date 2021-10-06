import './index.scss';
import React from 'react'
import PropTypes from 'prop-types'
import { any } from 'async'

const Div = ({
    className,
    children
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

Div.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}

export default Div
