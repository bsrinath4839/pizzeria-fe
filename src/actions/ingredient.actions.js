import {
    INGREDIENTS_LIST_LOADING_FAILED,
    INGREDIENTS_LIST_LOADING_PENDING,
    INGREDIENTS_LIST_LOADING_SUCCESS,
    INGREDIENT_ADD_OR_REMOVE_TO_TOPPINGS
} from '../helpers/Constants/ingredients.constants';
import { GetAllIngredientsService } from '../services/ingredient.services';

export const GetAllIngredientsAction = () => (dispatch, getState) => {
    dispatch({
        type: INGREDIENTS_LIST_LOADING_PENDING
    })

    GetAllIngredientsService()
        .then(data => {
            dispatch({
                type: INGREDIENTS_LIST_LOADING_SUCCESS,
                payload: data.result
            })
        })
        .catch(error => {
            dispatch({
                type: INGREDIENTS_LIST_LOADING_FAILED,
                payload: error.result,
            })
        })
}

export const AddOrRemoveIngredient = (ingredient) => (dispatch, getState) => {
    dispatch({
        type: INGREDIENT_ADD_OR_REMOVE_TO_TOPPINGS,
        payload: {
            ingredient,
        }
    })
}