import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetAllIngredientsAction } from '../actions/ingredient.actions';
import IngredientCard from './IngredientCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const Ingredients = ({
    ingredients,
    amount,
    GetAllIngredientsAction,
}) => {

    useEffect(() => {
        GetAllIngredientsAction();
    }, [])

    return (
        <div className="align-center">
            <h3>Make your own Pizza</h3>
            <div className="w-80">
                {
                    ingredients.map(ingredient => (
                        <IngredientCard key={ingredient._id} ingredient={ingredient} />
                    ))
                }
            </div>
            <div className="mr-bt-3 mr-tp-2">
                <h4>You have added Ingredients worth of: Rs. {amount}</h4>
                <Link to="/show-cart">
                    <Button className="primary-invert-full" value="Build Ur Pizza" />
                </Link>
            </div>
        </div>
    )
}

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired,
    amount: PropTypes.number.isRequired,
    GetAllIngredientsAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        ingredients: state.ingredient.ingredients,
        amount: state.ingredient.amount,
    };
}

const mapDispatchToProps = {
    GetAllIngredientsAction,
};


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
