import React  from "react";
import classes from "./ShopCartItem.module.css";


const shopCartItem  = (props) => {
  // let quantity=[];
// const [selectedQuantityState, setSelectedQuantityState ] = useState([]);
// const [countState, setCountState ] = useState(0);

//  let selectedQuantity = ({
//     id:props.product.id,
//     quantity: props.product.quantity
//   });
// setCountState(+1);
//   setSelectedQuantityState( prevArray  => [...prevArray, countState]);
//    console.log(selectedQuantityState);

//   for(let count = 1; count <= props.product.quantity; count++ )
//   {
//    quantity.push(count);
//   }
// let quantityList = quantity.map(q => (
//  <option>{q}</option> 
// ))
  


  return(
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
      {/* <label htmlFor='quantity'>Quantity</label>
      <select id={props.product.id+'s'}>
      {quantityList.reverse()}
      </select> */}
      <a  className={classes.btn} onClick={() => props.clickedRemove(props.product.id)}>Remove</a>
     </div>
     
      
    </div>         

)}

export default shopCartItem;