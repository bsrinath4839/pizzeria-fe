import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { GetAllCartItemsAction } from '../actions/cart.actions'
import { connect } from 'react-redux'
import CartCard from './CartCard'
import Card from '../components/Card'
import Button from '../components/Button'

const Cart = ({
    amount,
    items,
    GetAllCartItemsAction,
}) => {

    useEffect(() => {
        GetAllCartItemsAction();
    }, []);
    return (
        <>
            <div className="align-center">
                <h2>Cart Items</h2>
            </div>
            <div className="flex">
                <div className="w-70">
                    {
                        items && items?.length > 0 && items?.map((item, index) => {

                            return (
                                <CartCard
                                    key={index}
                                    item={item}
                                />);
                        })
                    }
                </div>
                <Card className="mr-1 pd-2 w-30 card-amount">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <b>Total:</b>
                                </td>
                                <td>
                                    Rs. {amount} /-
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button
                        className="secondary-full mr-tp-50"
                        value="Confirm Order"
                    />
                </Card>
            </div>
        </>
    )
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    GetAllCartItemsAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        amount: state.cart.amount,
        items: state.cart.items,
    }
}

const mapDispatchToProps = {
    GetAllCartItemsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
