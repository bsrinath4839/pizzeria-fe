import {
    ADD_TO_CART_FAILED,
    ADD_TO_CART_PENDING,
    ADD_TO_CART_SUCCESS,
    LOADING_CART_ITEMS_FAILED,
    LOADING_CART_ITEMS_PENDING,
    LOADING_CART_ITEMS_SUCCESS,
    REMOVE_FROM_CART_PENDING,
    REMOVE_FROM_CART_FAILED,
    REMOVE_FROM_CART_SUCCESS,
} from '../helpers/Constants/cart.constants';
import {
    AddToCartService,
    GetCartItemsService,
    RemoveCartItemService
} from '../services/cart.services';

const user_mobile = '8096873682';

export const AddToCartAction = (item) => (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CART_PENDING
    });
    AddToCartService(item, user_mobile)
        .then(data => {
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: {
                    data: item,
                    user_mobile,
                    amount: getState().cart.amount + item.price
                }
            })
        })
        .catch(error => {
            dispatch({
                type: ADD_TO_CART_FAILED,
                payload: error.toString(),
            })
        })
};

export const GetAllCartItemsAction = () => (dispatch, getState) => {
    dispatch({
        type: LOADING_CART_ITEMS_PENDING,
    })
    GetCartItemsService(user_mobile)
        .then(data => {
            dispatch({
                type: LOADING_CART_ITEMS_SUCCESS,
                payload: {
                    data: data.result.items,
                    user_mobile: data.result.user_mobile,
                    amount: data.result.amount
                }
            });
        })
        .catch(error => {
            dispatch({
                type: LOADING_CART_ITEMS_FAILED,
                payload: error.toString()
            })
        })
}

export const RemoveCartItemAction = (_id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART_PENDING
    });
    RemoveCartItemService(_id, user_mobile)
        .then(data => {
            dispatch({
                type: REMOVE_FROM_CART_SUCCESS,
                payload: {
                    _id,
                    message: data.message,
                }
            })
        })
        .catch(error => {
            dispatch({
                type: REMOVE_FROM_CART_FAILED,
                payload: {
                    message: error.message
                }
            })
        })
}

const BuildCustomisedPizza = () => (dispatch, getState)=>{
    let toppings = getState().ingredient.toppings;
    let amount = toppings.reduce((previous, current)=>{
        return previous + current.price;
    }, 0);

}