import React, { Component } from 'react';
import logo from './shopingCart.png';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Shopping</h1>
        </header>
        <h2 className="App-intro">
          Products
        </h2>
        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
