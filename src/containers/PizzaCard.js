import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card';
import Media from '../components/Media';
import Button from '../components/Button';
import Description from '../components/Description';
import Modal from '../components/Modal';
import ShowCurrentPizza from './ShowCurrentPizza';
import FoodType from '../components/FoodType';
import { connect } from 'react-redux';


const ShowModal = ({ open, children, onClose }) => {
    return (
        <Modal
            open={open}
            className="pizza"
            onClose={onClose}
            title={children.name}
            children={<ShowCurrentPizza pizza={children} />}
        />
    )
}


const PizzaCard = ({
    pizza
}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Card className="card-pizza">
                <div className="w-100">
                    <h3>{pizza.name}</h3>
                    <h6><FoodType className="mr-lt-2 mr-rt-2" type={pizza.type} /></h6>
                    <small>{pizza.description}</small>
                    <Description term="Price" data={`Rs. ${pizza.price}`} />
                    <Button className="primary-invert-full mr-tp-5" value="show More" onClick={() => setOpen(true)} />
                </div>
                <Media
                    alt={pizza._id}
                    className="align-center w-80 h-80 pd-10"
                    src={pizza.image}
                    type="image" />

            </Card>
            <ShowModal onClose={() => setOpen(false)} open={open} children={pizza} />
        </>
    )
}

PizzaCard.propTypes = {
    pizza: PropTypes.object.isRequired,

};

export default PizzaCard;
