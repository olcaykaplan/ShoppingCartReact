import React, { Component } from "react";
import Cockpit from '../../Components/Cockpit/Cockpit'
import ItemList from '../../Components/ItemList/ItemList';
import ShopCartList from '../../Components/ShopCartList/ShopCartList';

class ShoppingBuilder extends Component {
    state= {
        items:[
          {id:'1234',  name:'Black Daily-Life Nike Shoes',  img:'shoes.jpg',  price:254.99,},
          {id:'8745',  name:'Comfort & Minimal Tabouret',  img:'taboret.jpg',  price: 187.99,},
          {id:'1055sd',  name:'Red Daily-Life Vans Shoes',  img:'vans-red.jpg',  price:547.99,},
         ],
         shoppingCart:[],
         homePage: true,
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
       console.log(shopList);
       this.setState({shoppingCart : shopList, totalPrice : totalPrice}); 
       
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
        this.state.shoppingCart.map(p => ( orderedTotalProductNumber += p.quantity)); 
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
                          totalPrice = {this.state.totalPrice}
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

export default ShoppingBuilder;