import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { GetAllPizzasAction } from '../actions/pizza.actions';
import PizzaCard from './PizzaCard';
import { Grid } from '@material-ui/core';

const Pizzas = ({
    pizzas,
    GetAllPizzasAction,
}) => {

    useEffect(() => {
        GetAllPizzasAction();
    }, []);

    return (
        <div>
            {
                pizzas.map(pizza => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))
            }
        </div>
    )
}

Pizzas.propTypes = {
    pizzas: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLoaded: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        pizzas: state.pizza.pizzas,
        isLoading: state.pizza.isLoading,
        isLoaded: state.pizza.isLoaded,
    }
};

const mapDispatchToProps = {
    GetAllPizzasAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
