import { waterfall } from 'async';
import {
    LOADING_CART_ITEMS_FAILED,
    LOADING_CART_ITEMS_PENDING,
    LOADING_CART_ITEMS_SUCCESS
} from '../helpers/Constants/cart.constants';
import {
    PIZZAS_LIST_LOADING_FAILED,
    PIZZAS_LIST_LOADING_PENDING,
    PIZZAS_LIST_LOADING_SUCCESS
} from '../helpers/Constants/pizza.constants';
import { GetCartItemsService } from '../services/cart.services';
import { GetAllPizzasService } from '../services/pizza.services';

export const GetAllPizzasAction = () => (dispatch, getState) => {
    waterfall([
        (next) => {
            dispatch({
                type: PIZZAS_LIST_LOADING_PENDING,
            });
            GetAllPizzasService()
                .then(data => {
                    dispatch({
                        type: PIZZAS_LIST_LOADING_SUCCESS,
                        payload: data.result,
                    })
                    next(null);
                })
                .catch(error => {
                    console.error({ error });
                    dispatch({
                        type: PIZZAS_LIST_LOADING_FAILED,
                        payload: error.result,
                    })
                    next(error);
                })
        },
        (next) => {
            dispatch({
                type: LOADING_CART_ITEMS_PENDING
            })
            GetCartItemsService('8096873682')
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
    ])
}