import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)   // Create array of keys from the props.ingredients object
    .map(igKey => {                                               // For each key in array, 
      return [...Array(props.ingredients[igKey])]                 // Create an array with as many entries as the key's value from props
      .map((_, i) => {                                            // For each new array entry,
        return <BurgerIngredient key={igKey + i} type={igKey} />  // Create a BurgerIngredient component, with the type of the current iteration's ingredient key
      })
    })
    .reduce((arr, el) => {      // For each element
      return arr.concat(el)     // Concatonate the element to the accumulated array
    }, [])                      // Initial value of an empty array
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger