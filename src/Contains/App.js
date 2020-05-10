import React, {Component,state} from 'react';
import logo from '../Resources/img/logo.svg';
import classes from './App.module.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import ItemList from '../Components/ItemList/ItemList';
import ShopCartList from '../Components/ShopCartList/ShopCartList';

class App extends Component {
state= {
  items:[
    {id:'1234',  name:'Black Daily-Life Nike Shoes',  img:'shoes.jpg',  price:'254.99',},
    {id:'8745',  name:'Comfort & Minimal Tabouret',  img:'taboret.jpg',  price:'187.99',},
    {id:'1055sd',  name:'Red Daily-Life Vans Shoes',  img:'vans-red.jpg',  price:'547.99',},
   ],
   shoppingCart:[],
   homePage: true,
}

addShoppingCart =  (itemID) => {
  const products = [...this.state.items];
  const shopList = [...this.state.shoppingCart];

  let product = products.find(p => p.id == itemID);
  let shopProduct = shopList.find(p => p.id == product.id);
  if(shopProduct){
    shopProduct.quantity = parseInt(shopProduct.quantity)+1; 
  }
  else{
     product.quantity=1;
     shopList.push(product);
  }
  this.setState({ shoppingCart : shopList});
}
removeShoppingCartItem = (id) => {
 let  shopList = [...this.state.shoppingCart];
 const  productIndex = shopList.findIndex(p => p.id == id);
 shopList.splice(productIndex,1);
 console.log(shopList);
this.setState({
  shoppingCart : shopList
})
}

togglePage = (page) => {
let status = true;
if(page === 'shoppingCart') status = false;
else status = true;
 this.setState({
   homePage:status
 });
}

render(){
  let pageContent = '';
  let orderedTotalProductNumber = 0;
  this.state.shoppingCart.map(p => {
    orderedTotalProductNumber += p.quantity;
  }) 
  if(this.state.homePage){
   pageContent =  <ItemList 
                items = {this.state.items}
                clicked = {this.addShoppingCart}
                />
  }
  else{
    pageContent = <ShopCartList
                    products = {this.state.shoppingCart}
                    clickedRemove = {this.removeShoppingCartItem}
                   
                  />
  }
  return(
      <div >
      <Cockpit 
        orderedTotalProductNumber = {orderedTotalProductNumber}
        togglePage = {this.togglePage}
      />
      
     {pageContent}

      </div>
    );
  }
}

export default App;
