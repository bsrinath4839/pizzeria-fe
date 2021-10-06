import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Media from '../components/Media'
import CardContent from '../components/CardContent'
import Description from '../components/Description'
import CardActions from '../components/CardActions'
import Button from '../components/Button'
import { AddOrRemoveIngredient } from '../actions/ingredient.actions'
import { connect } from 'react-redux'

const IngredientCard = ({
    ingredient,
    toppings,
    AddOrRemoveIngredient,
}) => {
    return (
        <Card className="card-ingredient">
            <Media alt={ingredient._id} className="align-center w-20" src={ingredient.image} type="image" />
            <CardContent className="align-center">
                <h4>{ingredient.name}</h4>
                <Description term="Price" data={ingredient.price.toString()} />
            </CardContent>
            <>
                {
                    toppings.includes(ingredient)
                        ? <Button className="primary-invert" onClick={() => AddOrRemoveIngredient(ingredient)} value="Remove Topping" />
                        : <Button className="secondary" onClick={() => AddOrRemoveIngredient(ingredient)} value="Add Topping" />

                }
            </>
        </Card>
    )
}

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    toppings: PropTypes.array.isRequired,
    AddOrRemoveIngredient: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        toppings: state.ingredient.toppings,
    }
}

const mapDispatchToProps = {
    AddOrRemoveIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientCard)
