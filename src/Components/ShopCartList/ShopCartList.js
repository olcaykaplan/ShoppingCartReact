import React from 'react';
import ShopCartItem from './ShopCartItem/ShopCartItem';
import EmptyList from '../UI/EmptyList'

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
        let content = shopCartProductList.length  > 0 ? 
              <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p> :
             <EmptyList emptyPage='shoppingCartEmpty.png'>shopping cart is empty</EmptyList>;
             console.log(content);
    return(
      <div style={{
          minHeight: '60vh'
      }}>
            {content}           
           
            {shopCartProductList}
      </div>
    );

}

export default shopCartList;