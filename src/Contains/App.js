import React, {Component} from 'react';
import ShoppingBuilder from '../containers/ShoppingBuilder/ShoppingBuilder'
import Layout from '../hoc/Layout/Layout';

function App() {
  return(
    <div>
    <Layout>
    <ShoppingBuilder/>
    </Layout>
    </div>
  )
}

export default App;

