import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'

import classes from './ContactData.css'

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, // Would normally be calculated on server side
      customer: {
        name: 'Gavin Quirk',
        address: {
          street: 'TestStreet 1',
          zipCode: '129519',
          country: 'United States'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false })
      })
  }

  render () {

    let form = (
      <form action="">
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
        <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
      </form>
    )

    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData} >
        <h4>Enter your Contact Information</h4>
        {form}
      </div>
    )

  }




}

export default ContactData