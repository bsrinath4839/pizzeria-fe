import './index.scss';
import React from 'react';
import { Route } from 'react-router';
import OrderPizza from '../../pages/OrderPizza';
import BuildUrPizza from '../../pages/BuildUrPizza';
import Home from '../../pages/Home';
import ShowCart from '../../pages/ShowCart';

const Routes = () => {
    return (
        <div className="routes">
            <Route exact path="/" component={Home} />
            <Route path="/order-pizza" component={OrderPizza} />
            <Route path="/build-ur-pizza" component={BuildUrPizza} />
            <Route path="/show-cart" component={ShowCart} />
        </div>
    );
};

export default Routes;
