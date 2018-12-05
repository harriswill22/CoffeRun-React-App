import React, { Component } from "react";
import OrderForm from "./OrderForm.js";
import OrderList from "./OrderList.js"

class CoffeeOrder extends Component {
    constructor(props) {
    super(props);
    this.state = {
        coffee: "",
        EmailAddress: "",
        Flavor : "",
        Size: "",
        Strength: " ",
        orders: []

    };
}

render(){
    return(<div className="Coffee-container">
    <h1 className="Title"> Coffee Run</h1>
    <OrderForm
    onSubmit={this._OnSubmit}
    handleReset={this._OnReset}
    coffee={this.state.coffee}
    EmailAddress={this.state.EmailAddress}
    Size={this.state.Size}
    Flavor={this.state.Flavor}
    Strength={this.state.Strength}
    handleChangeCoffee={(event) => this._OnChangeCoffee(event.target.value)}
    handleEmailChange={(event) => this._OnChangeEmail(event.target.value)}
    handleSizeChange={(event) => this._OnChangeSize(event.target.value)}
    handleChangeFlavor={(event) => this._OnChangeFlavor(event.target.value)}
    handleChangeStrength={(event) => this._OnChangeStrength(event.target.value)}
    />
<div>
<h3>Your Order</h3>
<OrderList  
    orders ={this.state.orders}
/>
</div>
</div>
    );
}


_OnChangeCoffee = coffeeInput =>{
    console.log(coffeeInput);
    this.setState({
        coffee : coffeeInput
    });
}

_OnChangeEmail = emailInput =>{
    console.log(emailInput);
    this.setState({
        EmailAddress : emailInput
    });
}

_OnChangeFlavor = flavorInput =>{
    console.log(flavorInput);
    this.setState({
        Flavor : flavorInput
    });
}
_OnChangeSize = sizeInput =>{
    console.log(sizeInput);
    this.setState({
        Size: sizeInput
    });
    
}

_OnChangeStrength = StrengthInput =>{
    console.log(StrengthInput);
    this.setState({
        Strength : StrengthInput
    });
}



_OnSubmit = event =>{
    console.log(event); 
    event.preventDefault();
    this.setState({
        orders: [...this.state.orders,{
        coffee: this.state.coffee,
        EmailAddress: this.state.EmailAddress,
        Flavor : this.state.Flavor,
        Size: this.state.Size,
        Strength:this.state.Strength
        }]
        
    },()=>{
        this._OnReset();
    })
}

_OnReset = () =>{
    this.setState({
        coffee: "",
        EmailAddress: "",
        Flavor : "",
        Size: "",
        Strength: " ",
    })
}



}
export default CoffeeOrder;