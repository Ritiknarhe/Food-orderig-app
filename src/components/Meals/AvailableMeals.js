import React from 'react'
import classes from "./AvailableMeals.module.css";
import MealItems from './MealItem/MealItems';



const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Hamburger",
      description: "The Classic Burger",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Fried chicken",
      description: "Special crispy chicken.",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal)=>(
        <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />


    ));
    return (
        <section className={classes.meals}>
          
            <ul>{mealsList}</ul>
          
        </section>
      );
}

export default AvailableMeals