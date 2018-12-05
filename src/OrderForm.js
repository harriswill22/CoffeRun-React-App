import React, { Component } from "react";

function OrderForm(props){
    return(
        <form onSubmit={props.onSubmit} >
        {/* Coffee */}
        <label>
            Coffee:
            <input value={props.coffee} onChange={props.handleChangeCoffee}  type="text"  name="coffee" placeholder="Bright, like my soul"/>

        </label>
    {/* `EmailAddress` */}
        
        <br></br>
        <label>
        Email Address:
            <input value={props.EmailAddress} onChange={props.handleEmailChange}  type="email" name="emailAddress" placeholder="sonso@sonso.com"/>

        </label>
        <br></br>
     {/* Flavor */}
        <label>
        Flavor:
        <input value={props.Flavor} onChange={props.handleChangeFlavor} type="text" name="flavor" placeholder="chocolate" />
        
    </label>
    <br></br>

    {/* Size */}
    <label>
        Size:
        <input value={props.Size} onChange={props.handleSizeChange} type="text" name="size" placeholder="tall" />
    </label>
    <br></br>

        {/*Strength */}
    <label>
        Strength:
        <input value={props.Strength} onChange={props.handleChangeStrength} type="number" name="strength" min="0" max="100"  />
    </label>
    <br></br>


    {/* Submit */}
    <input type="submit"/>
    <input onClick={props.handleReset} data-reset-button type="reset"/>
        </form>
    );
}

export default OrderForm;