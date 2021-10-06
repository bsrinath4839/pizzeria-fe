import React from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button';
import CardActions from '../components/CardActions';
import FoodType from '../components/FoodType';
import {
    AddToCartAction,
} from '../actions/cart.actions';
import { connect } from 'react-redux';

const CheckPizzaExist = (items, pizza) => {
    for (var i = 0; i < items.length; i++) {
        if (items[i]._id == pizza._id) {
            return true;
        }
    }
    return false;
}

const ShowCurrentPizza = (props) => {
    let { pizza, items } = props;

    const addTocart = () => {
        props.AddToCartAction(pizza);
    }


    return (
        <div className="align-items">
            <div style={{ textAlign: 'center' }}>
                <img
                    alt={pizza._id}
                    height="270em"
                    src={pizza.image}
                />
            </div>
            <div className="">
                <h5>{pizza.description}</h5>
                <h3> <FoodType className="mr-lt-2 mr-rt-2" type={pizza.type} /> </h3>
                <h3> Price: Rs. {pizza.price} /- </h3>
                <h3> Ingredients: <small style={{ fontWeight: 400 }}>{pizza.ingredients.join(", ")}</small></h3>
                <h3> Toppings: <small style={{ fontWeight: 400 }}>{pizza.toppings.join(", ")}</small></h3>
            </div>
            <CardActions className="mr-tp-5">
                {
                    CheckPizzaExist(items, pizza)
                        ? <Button className="primary-invert-full" value="Added To Cart" onClick={() => ({})} />
                        : <Button className="secondary-full" value="Add to Cart" onClick={() => addTocart()} />
                }
            </CardActions>
        </div>
    )
}

ShowCurrentPizza.propTypes = {
    items: PropTypes.array.isRequired,
    pizza: PropTypes.object.isRequired,
    AddToCartAction: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        items: state.cart.items,
    }
};


const mapDispatchToProps = {
    AddToCartAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCurrentPizza);
