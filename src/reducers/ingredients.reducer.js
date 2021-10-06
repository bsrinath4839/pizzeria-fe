import { ingredientState } from '../helpers/initialStates';
import {
    INGREDIENT_ADD_OR_REMOVE_TO_TOPPINGS,
    INGREDIENTS_LIST_LOADING_FAILED,
    INGREDIENTS_LIST_LOADING_PENDING,
    INGREDIENTS_LIST_LOADING_SUCCESS,
} from '../helpers/Constants/ingredients.constants';

/*
    ingredients: [],
    isLoading: false,
    isLoaded: false,
 */

const SumOfToppings = (toppings) => {
    var total = toppings.reduce(function (prev, cur) {
        return prev + cur.price;
    }, 0);
    return total;
}


const ingredientReducer = (state = ingredientState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case INGREDIENTS_LIST_LOADING_FAILED:
            return {
                ...state,
                ingredients: [],
                isLoading: false,
                isLoaded: true,
                amount: 0,
            };
        case INGREDIENTS_LIST_LOADING_PENDING:
            return {
                ...state,
                ingredients: [],
                isLoading: true,
                isLoaded: false,
                amount: 0,
            };
        case INGREDIENTS_LIST_LOADING_SUCCESS:
            return {
                ...state,
                ingredients: payload,
                isLoading: false,
                isLoaded: true,
                amount: 0,
            };
        case INGREDIENT_ADD_OR_REMOVE_TO_TOPPINGS:
            if (state.toppings.includes(payload.ingredient)) {
                let newToppings = state.toppings.filter((topping) => {
                    return topping._id !== payload.ingredient._id;
                });
                return {
                    ...state,
                    toppings: newToppings,
                    amount: SumOfToppings(newToppings),
                }
            } else {
                let toppings = [...state.toppings, payload.ingredient]
                return {
                    ...state,
                    toppings,
                    amount: SumOfToppings(toppings),
                }
            }
        default:
            return state;
    }
}

export default ingredientReducer;