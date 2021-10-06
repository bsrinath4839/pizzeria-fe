import React from 'react'
import Pizzas from '../../../containers/Pizzas'

const OrderPizza = () => {
    // useEffect(() => {
    //     this.props
    // }, [])
    return (
        <div className="align-center">
            <h3>Order from Our Pizzas</h3>
            <Pizzas />
        </div>
    )
}

export default OrderPizza;
