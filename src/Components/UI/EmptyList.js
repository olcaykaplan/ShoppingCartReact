import React from 'react';
import classes from './EmptyList.module.css';

const emptyList = (props) => (
    <div className = {classes.EmptyList}>
        {/* <img  alt='products' src={require('../../../Resources/img/'+props.product.img)}></img> 
        require('../../../Resources/img/shoes.jpg')*/}
          <img  alt='products' src={require('../../Resources/img/'+props.emptyPage)}></img> 
          <h1>{props.children}</h1>
        
    </div>
);

export default emptyList;