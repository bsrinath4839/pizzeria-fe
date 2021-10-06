import Axios from '../api/Axios';

export const GetAllPizzasService = () => {
    return Axios.get('/pizzas')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
};

