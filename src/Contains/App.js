import React, {Component} from 'react';
import ShoppingBuilder from '../containers/ShoppingBuilder/ShoppingBuilder'
import Layout from '../hoc/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return(
    <BrowserRouter>
      <div>
      <Layout>
      <ShoppingBuilder/>
      </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App;

