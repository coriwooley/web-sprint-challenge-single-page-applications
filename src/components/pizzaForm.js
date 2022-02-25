import React from "react";

const PizzaForm = (props) => {

    return (
        <div>
            <h1>Build Your Pizza</h1>
            <img src="https://media.istockphoto.com/photos/picking-slice-of-pepperoni-pizza-picture-id1133727757?k=20&m=1133727757&s=612x612&w=0&h=WAx4F4efU3Yx3Qu15iUgTMtB7G_kbmh-DqAvL4aNfeE=" alt="two hands grabbing slices of pizza"/>
            <form id="pizza-form">
                <h2>Build Your Own Pizza</h2>
                <div className="pizza-sizes">
                    <h3>Choice of Size</h3>
                    <select id="size-dropdown">
                        <option >Small</option>
                        <option >Medium</option>
                        <option >Large</option>
                        <option >X-Large</option>
                    </select>
                </div>
                <div className="sauce-choices">
                    <h3>Choice of Sauce</h3>
                    <label>Original Red<input type="radio"/></label>
                    <label>Garlic Ranch<input type="radio" /></label>
                    <label>BBQ Sauce<input type="radio" /></label>
                    <label>Spinach Alfredo<input type="radio" /></label>
                </div>
                <div className="toppings">
                    <h3>Add Toppings</h3>
                    <label>Pepperoni<input type="checkbox" name="pepperoni"/></label>
                    <label>Sausage<input type="checkbox" name="sausage"/></label>
                    <label>Bacon<input type="checkbox" name="bacon"/></label>
                    <label>Bell Pepper<input type="checkbox" name="bellpepper"/></label>
                    <label>Onion<input type="checkbox" name="onion"/></label>
                    <label>Pineapple<input type="checkbox" name="pineapple"/></label>
                </div>
                <div className="customer-instructions">
                    <h3>Special Instructions</h3>
                    <label>Name:<input type="text" id="name-input"/></label>
                    <input type="text" id="special-text" placeholder="Anything else to add?"/>
                </div>
                <button id="order-button">Add To Order</button>
            </form>
        </div>
    )
}

export default PizzaForm