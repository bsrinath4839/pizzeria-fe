import './index.scss';
import React from 'react'
import PropTypes from 'prop-types'

const Media = ({
    alt,
    className,
    src,
    type,
}) => {
    return (
        <div className={className}>
            {
                type === "image"
                    ? <img alt={alt} src={src} width="100%" height="100%" />
                    : null
            }
            {
                type === "video"
                    ? <video alt={alt} src={src} width="100%" height="100%" />
                    : null
            }
            {
                type === "audio"
                    ? <audio alt={alt} src={src} width="100%" height="100%" />
                    : null
            }
        </div>
    )
}

Media.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default Media;
