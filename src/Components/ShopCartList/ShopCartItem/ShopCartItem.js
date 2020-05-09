import React  from "react";
import classes from "./ShopCartItem.module.css";


const shopCartItem = (props) => (
     <div id={props.product.id} className={classes.ShopCartItem}>
     <div className= {classes.Item_Left}>
    
       <img  alt='products' src={require('../../../Resources/img/'+props.product.img)}></img> 
      </div>
     <div className= {classes.Item_Right}>
     <h1>{props.orderNumber}-{props.product.name}</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum lectus a odio aliquam placerat. Suspendisse vel dolor consequat, condimentum enim ut, tincidunt dolor. 
      Proin ipsum nibh, volutpat sit amet erat non, lobortis tempus neque. 
      Mauris luctus mattis dapibus. Aliquam erat volutpat.</p>
      <h3 className={classes.price}>{props.product.price}₺</h3>
      <a  className={classes.btn} onClick={() => props.clickedRemove(props.product.id)}>Remove</a>
     </div>
     
      
    </div>            
)

export default shopCartItem;