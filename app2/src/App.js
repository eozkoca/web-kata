import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

const addProductToState = (name, description) => (prevState, props) => ({
  products: [{name: name, description: description} ,...prevState.products  ]
})

const removeProductToState = (index) => (prevState, props) => ({
  products: [...prevState.products.splice(0, index), ...prevState.products.splice(1) ]
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products
    };
  }

  addProduct(event){
    const target = event.target;
    const name = target.productName.value;
    const description = target.description.value;
    this.setState(addProductToState(name, description));
    event.preventDefault();
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form onSubmit={e => this.addProduct(e)}>
          <p>Product Name</p>
          <input type="text" name="productName" />
          <p>Description</p>
          <input type="text" name="description" />

          <button type="submit">Add Product</button>
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} />
      </div>
    </div>
  }
}

export default App
