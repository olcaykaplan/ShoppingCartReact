import React from 'react';
import Item from './Item/Item';
import classes from './ItemList.module.css';

const itemList = (props) =>  {
  
   let itemJsxList = props.items.map(item => {
    return (
        <Item
            item= {item}
            clicked= {props.clicked}
        />
    );
})
        return(
            <div className={classes.ItemList}>
                <h1>Product List</h1>
                {itemJsxList}
            </div>

        );
}

export default itemList;