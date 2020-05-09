import React from 'react';
import ShopCartItem from './ShopCartItem/ShopCartItem'

const shopCartList = (props) =>{
    let shopCartProductList = props.products.map((item, index) => {
        return(
        <ShopCartItem
            orderNumber = {index+1} 
            product = {item}
            clickedRemove= {props.clickedRemove}
        />
       
        );
    })

    return(
      <div>
            {shopCartProductList}
      </div>
    );

}

export default shopCartList;