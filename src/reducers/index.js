import cartReducer from './cart.reducer';
import pizzaReducer from './pizza.reducer';
import ingredientReducer from './ingredients.reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    pizza: pizzaReducer,
    ingredient: ingredientReducer,
    cart: cartReducer
});

export default reducers;