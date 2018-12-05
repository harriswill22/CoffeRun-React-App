import React from "react";

const Order = props =>{
    console.log(props);
    return(  
        <ul>
        {props.orders.map(order => {
        return(
            <ul>
                <li>{`Coffee: ${order.coffee}`}</li>
                <li>{`EmailAdress: ${order.EmailAddress}`}</li>
                <li>{`Flavor: ${order.Flavor}`}</li>
                <li>{`OrderSize: ${order.Size}`}</li>
                <li>{`Strength: ${order.Strength}`}</li>
            </ul>
        )
        })}
        </ul>
    );
};

export default Order