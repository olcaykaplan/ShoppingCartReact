import React from 'react';
import classes from './Cockpit.module.css';
import shoppingCart from '../../Resources/img/shoppingCart.png';
const cockpit = (props) => {
    let productCount = props.orderedTotalProductNumber;
 
    return(
    <div className={classes.Cockpit} >
    <div className={classes.Header}>
    <div className={classes.Header_Left}>
        <button onClick={() => props.togglePage('login')}   className={[classes.Button, classes.ButtonLogin].join(' ')} >Login</button>
        <button onClick={() => props.togglePage('singUp')} className={ [classes.Button, classes.ButtonSingUp].join(' ')}> Sing up</button>
    </div>
    <div className={classes.Header_Center}>
        <a  onClick={() => props.togglePage('homepage') }>Items</a>
        <a onClick={() => props.togglePage('shoppingCart')}>Shopcart List</a> 
    </div>  
        <div className={''+classes.Header_Right}> 
        
        <a  onClick={() => props.togglePage('shoppingCart')}>
        <img src={shoppingCart}></img>
        </a> 

        <label> { productCount= productCount > 0 ?  productCount : '' }</label>

        </div>
    </div>

    </div>
    )
};

export default  cockpit;