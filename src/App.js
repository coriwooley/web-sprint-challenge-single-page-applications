import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom'
import PizzaForm from "./components/pizzaForm";
import * as yup from 'yup'
import schema from "./validation/formSchema"
import Homepage from "./components/homepage";


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

 
  const formSubmit = () => {
    //wip
  }

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


  return (
    <div className="App">
      <nav>
        <h1 className="pizzaHeader">Slice of Heaven</h1>
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
