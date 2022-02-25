import React from "react";

const PizzaForm = (props) => {
const {values, submit, change, errors} = props

const onChange = (e) => {
    const {name, value, type, checked} = e.target
    const newVal = type === "checkbox" ? checked : value
    change(name, newVal)
}

const onSubmit = (e) => {
    e.preventDefault()
    submit()
}

    return (
        <div className="form">
            <h1>Slice of Heaven Pizzeria</h1>
            <img src="https://media.istockphoto.com/photos/picking-slice-of-pepperoni-pizza-picture-id1133727757?k=20&m=1133727757&s=612x612&w=0&h=WAx4F4efU3Yx3Qu15iUgTMtB7G_kbmh-DqAvL4aNfeE=" alt="two hands grabbing slices of pizza"/>

            <form id="pizza-form" onSubmit={onSubmit}>
                <h2>Build Your Own Pizza</h2>

                <div className="pizza-sizes">
                    <h3>Choice of Size</h3>
                    <p>{errors.sizes}</p>
                    <select id="size-dropdown" onChange={onChange} value={values.sizes} name="sizes">
                        <option value="">--select size--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                    </select>
                </div>

                <div className="sauce-choices">
                    <h3>Choice of Sauce</h3>
                    <p>{errors.sauces}</p>
                    <label>Original Red
                        <input 
                        type="radio" 
                        name="sauce" 
                        onChange={onChange}
                        value="original"
                        checked={values.sauce === "original"}
                        /></label>

                    <label>Garlic Ranch
                        <input
                        type="radio" 
                        name="sauce" 
                        onChange={onChange}
                        value="garlicRanch"
                        checked={values.sauce === 'garlicRanch'}
                        /></label>

                    <label>BBQ Sauce
                        <input 
                        type="radio" 
                        name="sauce" 
                        onChange={onChange}
                        value="bbq"
                        checked={values.sauce === 'bbq'}
                        /></label>

                    <label>Spinach Alfredo
                        <input 
                        type="radio" 
                        name="sauce" 
                        onChange={onChange}
                        value="spinachAlf"
                        checked={values.sauce === 'spinachAlf'}
                        /></label>
                </div>

                <div className="toppings">
                    <h3>Add Toppings</h3>
                    <p>{errors.pepperoni}</p>
                    <p>{errors.sausage}</p>
                    <p>{errors.onion}</p>
                    <p>{errors.bacon}</p>
                    <label>Pepperoni
                        <input 
                        type="checkbox" 
                        name="pepperoni" 
                        checked={values.pepperoni} 
                        onChange={onChange}
                        /></label>

                    <label>Sausage
                        <input 
                        type="checkbox" 
                        name="sausage" 
                        checked={values.sausage} 
                        onChange={onChange}
                        /></label>

                    <label>Bacon
                        <input 
                        type="checkbox" 
                        name="bacon" 
                        checked={values.bacon} 
                        onChange={onChange}
                        /></label>
                    
                    <label>Onion
                        <input 
                        type="checkbox" 
                        name="onion" 
                        checked={values.onion} 
                        onChange={onChange}
                        /></label>
                </div>

                <div className="customer-instructions">
                    <h3>Special Instructions</h3>
                    <p>{errors.name}</p>
                    <p>{errors.specialText}</p>
                    <label>Name:
                        <input 
                        type="text"
                        name="name"
                        id="name-input"
                        onChange={onChange}
                        /></label>

                    <input 
                    type="text"
                    name="specialText"
                    id="special-text"
                    onChange={onChange}
                    placeholder="Anything else to add?"/>
                </div>

                <button type="submit" id="order-button">Add To Order</button>
            </form>
        </div>
    )
}

export default PizzaForm