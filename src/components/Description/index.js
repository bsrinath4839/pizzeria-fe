import './index.scss';
import React from 'react'
import PropTypes from 'prop-types'

const Description = ({
    className,
    term,
    data,
}) => {
    return (
        <div className={`dl ${className}`}>
            <div>
                {`${term}:`}&nbsp;
            </div>
            <div>
                {data}
            </div>
        </div>
    )
}

Description.propTypes = {
    className: PropTypes.string,
    term: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
}

export default Description
