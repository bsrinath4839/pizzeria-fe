import { pizzaState } from '../helpers/initialStates';
import { PIZZAS_LIST_LOADING_FAILED, PIZZAS_LIST_LOADING_PENDING, PIZZAS_LIST_LOADING_SUCCESS } from '../helpers/Constants/pizza.constants';

/*
    pizzas: [],
    isLoading: false,
    isLoaded: false,
 */


const pizzaReducer = (state = pizzaState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case PIZZAS_LIST_LOADING_FAILED:
            return {
                pizzas: [],
                isLoading: false,
                isLoaded: true,
                error: payload,
            };
        case PIZZAS_LIST_LOADING_PENDING:
            return {
                pizzas: [],
                isLoading: true,
                isLoaded: false,
            };
        case PIZZAS_LIST_LOADING_SUCCESS:
            return {
                pizzas: payload,
                isLoading: false,
                isLoaded: true,
            };
        default:
            return state;
    }
}

export default pizzaReducer;