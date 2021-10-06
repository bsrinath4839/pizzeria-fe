import {
    ADD_TO_CART_FAILED,
    ADD_TO_CART_PENDING,
    ADD_TO_CART_SUCCESS,
    LOADING_CART_ITEMS_FAILED,
    LOADING_CART_ITEMS_PENDING,
    LOADING_CART_ITEMS_SUCCESS,
    REMOVE_FROM_CART_FAILED,
    REMOVE_FROM_CART_PENDING,
    REMOVE_FROM_CART_SUCCESS
} from '../helpers/Constants/cart.constants';
import { cartState } from '../helpers/initialStates';

const SumOfItems = (items) => {
    var total = items.reduce(function (prev, cur) {
        return prev + cur.price;
    }, 0);
    return total;
}

const cartReducer = (state = cartState, action) => {
    let {
        type,
        payload,
    } = action;
    switch (type) {
        case ADD_TO_CART_PENDING:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
            }
        case ADD_TO_CART_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                isLoading: false,
                items: [...state.items, payload.data],
                user_mobile: payload.user_mobile,
                amount: payload.amount,
            }
        case LOADING_CART_ITEMS_PENDING:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                items: [],
                user_mobile: "",
                amount: 0
            }
        case LOADING_CART_ITEMS_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: [],
                user_mobile: "",
                amount: 0
            }
        case LOADING_CART_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: payload.data,
                user_mobile: payload.user_mobile,
                amount: payload.amount
            }
        case REMOVE_FROM_CART_PENDING:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            }
        case REMOVE_FROM_CART_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
            }
        case REMOVE_FROM_CART_SUCCESS:
            let newItems = state.items.filter((item) => {
                return item._id !== payload._id;
            });
            return {
                ...state,
                items: newItems,
                isLoading: false,
                isLoaded: true,
                amount: SumOfItems(newItems)
            }
        default:
            return state;
    }
}

export default cartReducer;