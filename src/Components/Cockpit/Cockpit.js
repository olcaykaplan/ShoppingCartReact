import React from 'react';
import classes from './Cockpit.module.css';
import shoppingCart from '../../Resources/img/shoppingCart.png';
const cockpit = (props) => {
    
    let productCount = props.orderedProductCount;
    return(
    <div className={classes.Cockpit} >
    <div className={classes.Header}>
    <div className={classes.Header_Center}>
        <a href='#' onClick={() => props.togglePage('home') }>Items</a>
        <a href='#' onClick={() => props.togglePage('shoppingCart')}>Shopcart List</a> 
    </div>  
        <div className={''+classes.Header_Right}> 
        <img src={shoppingCart}></img>
        <label> 
        { productCount= productCount > 0 ?  productCount : '' }</label>
        </div>
    </div>

    </div>
    )
};

export default  cockpit;