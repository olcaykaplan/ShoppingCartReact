import React from 'react';
import classes from './Item.module.css';

const item = (props) => {

    return(
        <div id={props.item.id} className={classes.Item}>
        
            <h3>{props.item.name}</h3>
            <img alt='products' src={require('../../../Resources/img/'+props.item.img)}></img>
            <p>{props.item.price}</p>
            <a className={classes.btn} onClick={() => props.clicked(props.item.id)}> Add Shopping Cart</a>
        </div>
    )

}


export default item;