import Axios from '../api/Axios';

export const AddToCartService = (
    item,
    user_mobile,
) => {
    let body = {
        item,
        user_mobile
    };
    return Axios.post('/cart/add', body)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        })
}

export const GetCartItemsService = (user_mobile) => {
    return Axios.get(`/cart/get/${user_mobile}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        })
}

export const RemoveCartItemService = (_id, user_mobile) => {
    return Axios.delete(`/cart/remove/${user_mobile}/${_id}`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response.data;
        })
}