/* eslint-disable indent,no-trailing-spaces */
import React, { Component } from 'react';
import './App.css';

/** Use this class to build recipes from Ingredients */
class Reciper extends Component {
    addToList () {
        return (
            console.log('add to right-hand nav bar')
        );
    }

    render () {
        return (
            <div>
                <h3>Please select your ingredients: </h3>
                <div className="ingredient-select">
                    <button className="ingredient-btn" onClick={() => this.addToList()}>Ingredient1</button>
                    <button className="ingredient-btn">Ingredient2</button>
                </div>
            </div>
        );
    }
}

export default Reciper;
