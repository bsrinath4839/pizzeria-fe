import './index.scss';
import React from 'react';
import { Cheff, Delivery, Ingredients } from '../../../assets';

const Home = () => {
    return (
        <div className="Home">
            <div className="our-story">
                <h1>Our Story</h1>
                <div className="story">
                    <p>
                        Pizza ipsum dolor amet garlic sauce chicken and bacon bacon & tomato pineapple, meatball fresh tomatoes personal beef philly steak steak meat lovers marinara sausage pepperoni.
                        NY style melted cheese garlic parmesan pizza roll garlic sauce.
                        Pepperoni sausage extra sauce philly chicken steak chicken NY style meatball ranch banana peppers thin crust bacon.
                        Deep crust fresh tomatoes chicken and bacon, green bell peppers marinara lasagna meat lovers chicken wing pizza roll bacon parmesan bbq sauce melted cheese.
                    </p>
                    <p>
                        Chicken and bacon bbq rib marinara, philly steak pork large banana peppers.
                        Melted cheese thin crust black olives pepperoni, pork ham meatball banana peppers bacon & tomato bbq rib chicken and bacon thin crust ranch.
                        Pork sauteed onions Chicago style green bell peppers bbq sauce ricotta burnt mouth pie mushrooms personal stuffed philly chicken ranch pepperoni.
                        
                    </p>
                    <p>
                        Ranch lasagna white garlic thin crust, philly steak buffalo sauce steak party meatball extra cheese garlic NY style sausage.
                        Platter steak marinara, ricotta pineapple white pizza chicken wing broccoli personal chicken wing bacon & tomato mushrooms parmesan mayo NY style.
                        Stuffed crust philly steak bacon & tomato red onions pan, chicken wing personal platter pepperoni NY style peppers deep crust ham meat lovers.
                    </p>
                </div>
            </div>
            <div className="level">
                <div className="image">
                    <img alt="Ingredients" src={Ingredients}/>
                </div>
                <div className="about">
                    <h3>Ingredients</h3>
                    <p>
                        Green bell peppers meatball hawaiian, white pizza chicken and bacon broccoli melted cheese party sauteed onions.
                        Melted cheese ham onions, bbq rib chicken wing parmesan stuffed crust pork white garlic bacon & tomato.
                        Garlic parmesan parmesan fresh tomatoes bacon & tomato bbq sausage buffalo sauce spinach Chicago style.
                        Bacon hand tossed lasagna, thin crust onions ham hawaiian extra sauce philly chicken ricotta thin crust steak bbq pizza.
                        Large sausage bbq fresh tomatoes sauteed onions broccoli green bell peppers chicken and bacon extra sauce sausage pork.
                    </p>
                </div>
            </div>
            <div className="level">
                <div className="about">
                    <h3>Our Cheffs</h3>
                    <p>
                    Chicken and bacon bbq rib marinara, philly steak pork large banana peppers.
                    Melted cheese thin crust black olives pepperoni, pork ham meatball banana peppers bacon & tomato bbq rib chicken and bacon thin crust ranch.
                    Pork sauteed onions Chicago style green bell peppers bbq sauce ricotta burnt mouth pie mushrooms personal stuffed philly chicken ranch pepperoni.
                    Ranch lasagna white garlic thin crust, philly steak buffalo sauce steak party meatball extra cheese garlic NY style sausage.
                    Platter steak marinara, ricotta pineapple white pizza chicken wing broccoli personal chicken wing bacon & tomato mushrooms parmesan mayo NY style.
                    Stuffed crust philly steak bacon & tomato red onions pan, chicken wing personal platter pepperoni NY style peppers deep crust ham meat lovers.
                    </p>
                </div>
                <div className="image">
                    <img alt="Cheff" src={Cheff}/>
                </div>
            </div>
            <div className="level">
                <div className="image">
                    <img alt="Delivery" src={Delivery}/>
                </div>
                <div className="about">
                    <h3>45 Mins. of Delivery</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;
