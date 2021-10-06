import Axios from "../api/Axios"

export const GetAllIngredientsService = () => {
    return Axios.get('/ingredients')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
}