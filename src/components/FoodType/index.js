import React from 'react';
import PropTypes from 'prop-types';
import LogoNonVeg from '../../assets/LogoNonVeg.svg';
import LogoVeg from '../../assets/LogoVeg.svg';

const FoodType = ({
    className,
    type,
}) => {
    return (
        <>
            {
                type === "nonveg"
                    ? <img className={className} alt={type} src={LogoNonVeg} />
                    : <img className={className} alt={type} src={LogoVeg} />
            }
        </>
    )
}

FoodType.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default FoodType;