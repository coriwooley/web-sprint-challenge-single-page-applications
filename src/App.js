import React, {useState} from "react";
import {Route, Link} from 'react-router-dom'
import PizzaForm from "./components/pizzaForm";
import * as yup from 'yup'
import schema from "./validation/formSchema"
import Homepage from "./components/homepage";
import axios from "axios";


const initialFormValues = {
  sizes: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  onion: false,
  name: '',
  specialText: '',
}

const initialFormErrors = {
  sizes: '',
  sauce: '',
  pepperoni: '',
  sausage: '',
  bacon: '',
  onion: '',
  name: '',
  specialText: '',
}


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState([])
 
 
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    }).catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }


  const submitOrders = (newOrders) => {
    axios.post(`https://reqres.in/api/orders`, newOrders)
    .then(res => {
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues)
    }).catch(err => console.log(err))
  }


  const formSubmit = () => {
    const newOrder = {
      sizes: formValues.sizes,
      sauce: formValues.sauces,
      toppings: ["pepperoni", "sausage", "bacon", "onion"].filter(top => formValues[top]),
      name: formValues.name,
      specialText: formValues.specialText,
    };

    submitOrders(newOrder)
  };


  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">Order Pizza</Link>
        </div>
      </nav>

      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/pizza">
      <PizzaForm
      values={formValues}
      change={handleChange}
      submit={formSubmit}
      errors={formErrors}
      />
      </Route>
    </div>
  );
};
export default App;
