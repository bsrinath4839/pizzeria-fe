import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card';
import Button from '../components/Button';
import FoodType from '../components/FoodType';
import Div from '../components/Div';
import { RemoveCartItemAction } from '../actions/cart.actions';
import { connect } from 'react-redux';
const CartItems = ({
    ingredients,
    name,
    price,
    toppings,
    type,
}) => {
    return (
        <>
            <h4 className="flex-center">{name} <FoodType className="mr-lt-2 mr-rt-2" type={type} /></h4>
            <h4>Price: Rs.{price}/-</h4>
            <h4>Ingredients: <span style={{ fontWeight: 400 }}>{ingredients.join(", ")}</span></h4>
            <h4>Toppings: <span style={{ fontWeight: 400 }}>{toppings.join(", ")}</span></h4>
        </>
    )
}

const CartCard = ({
    item,
    RemoveCartItemAction,
}) => {
    let {
        _id,
        ingredients,
        name,
        price,
        quantity,
        toppings,
        type,
    } = item;

    return (
        <Card className="card-cart">
            <Div
                className="w-60 div-cart-item pd-lt-3 pd-rt-3"
                children={
                    <CartItems
                        ingredients={ingredients}
                        name={name}
                        price={price}
                        toppings={toppings}
                        type={type}
                    />
                }
            />
            <Card className="w-40 pd-1 card-add-remove-buttons">
                <div className="flex-center justify-center w-100">
                    <Button className="decrease" value="-" />
                    <p className="w-80 justify-center">{quantity}</p>
                    <Button className="increase" value="+" />
                </div>
                <Button className="remove" onClick={() => RemoveCartItemAction(_id)} value={"remove"} />
            </Card>
        </Card>
    )
}

CartCard.propTypes = {
    item: PropTypes.object.isRequired,
    RemoveCartItemAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    RemoveCartItemAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
