import React, { Component } from "react";
import Cockpit from '../../Components/Cockpit/Cockpit'
import ItemList from '../../Components/ItemList/ItemList';
import ShopCartList from '../../Components/ShopCartList/ShopCartList';
// import Login from '../LoginRegister/Login/Login';
// import SignUp from '../LoginRegister/SignUp/SignUp';
import LoginRegister from '../LoginRegister/LoginRegister';
import { Route } from "react-router-dom";
class ShoppingBuilder extends Component {
    state= {
        items:[
          {id:'1234',  name:'Black Daily-Life Nike Shoes',  img:'shoes.jpg',  price:254.99,},
          {id:'8745',  name:'Comfort & Minimal Tabouret',  img:'taboret.jpg',  price: 187.99,},
          {id:'1055sd',  name:'Red Daily-Life Vans Shoes',  img:'vans-red.jpg',  price:547.99,},
         ],
         shoppingCart:[],
         page: 'login',
         totalPrice:0,
      }
      
      addShoppingCart =  (itemID) => {
        const products = [...this.state.items];
        const shopList = [...this.state.shoppingCart];
        
        const oldTotalPrice = this.state.totalPrice;
        let product = products.find(p => p.id === itemID);
        let shopProduct = shopList.find(p => p.id === product.id);
        let totalPrice = product.price + oldTotalPrice ;
      
        if(shopProduct){
          shopProduct.quantity = parseInt(shopProduct.quantity)+1; 
        }
        else{
           product.quantity=1;
           shopList.push(product);
        }
       
        this.setState({ shoppingCart : shopList, totalPrice : totalPrice});  
      }
      
      
      removeShoppingCartItem = (id) => {
       let  shopList = [...this.state.shoppingCart];
       
       const oldTotalPrice =  this.state.totalPrice;
       const removedItem = shopList.find(p => p.id === id);
       const totalPrice = oldTotalPrice - removedItem.price;
       const  productIndex = shopList.findIndex(p => p.id === id);
       if(removedItem.quantity === 1){
        shopList.splice(productIndex,1);
       }
       else {
          removedItem.quantity =  removedItem.quantity  - 1;
          shopList[productIndex] = removedItem;
       }
       
       this.setState({shoppingCart : shopList, totalPrice : totalPrice}); 
       
      }
      
      togglePage = (page) => {
      let status = page;
      // if(page !== 'homepage') status = false;
      // else status = true;
      // debugger
    
       this.setState({
        page:status
       });
      }
      
      render(){
        let pageContent = <ItemList 
        items = {this.state.items}
        clicked = {this.addShoppingCart}
        />;
        let orderedTotalProductNumber = 0;
        this.state.shoppingCart.map(p => ( orderedTotalProductNumber += p.quantity)); 
       
        if (this.state.page === 'shoppingCart' ) {
          pageContent = <ShopCartList
                          products = {this.state.shoppingCart}
                          clickedRemove = {this.removeShoppingCartItem}
                          totalPrice = {this.state.totalPrice}
                        />;
        }
        else if (this.state.page === 'signup'|| this.state.page === 'login' ) {
          // pageContent = <LoginRegister  page={this.state.page}/>
         
           pageContent = <Route
                          render = 
                            { (props) => 
                            <LoginRegister 
                              {...props} page ={this.state.page} />
                              }/> 
  
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

export default ShoppingBuilder;