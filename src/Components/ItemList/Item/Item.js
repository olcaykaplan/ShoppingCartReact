import React from 'react';
import classes from './Item.module.css';

const item = (props) => {

    return(
        <div key={props.item.id} className={classes.Item}>
            <h3>{props.item.name}</h3>
            <img alt='products' src={require('../../../Resources/img/'+props.item.img)}></img>
            <p>{props.item.price}</p>
            <button className={classes.btn} onClick={() => props.clicked(props.item.id)}> Add Shopping Cart</button>
        </div>
    )

}


export default item;