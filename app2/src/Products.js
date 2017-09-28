import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    render(){
        const {deleteMe, product} = this.props;
        return <div className='product'>
            <div className='details'>
                <div className='name'>{product.name}</div>
                <div className='desc'>{product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick= {deleteMe}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        const {deleteAt, products} = this.props
        return <div className='products'>
            {products.map(
                (p, i) => {
                const deleteMe = () => deleteAt(i);
                return <Product product={p} key={'product-' + i } deleteMe={deleteMe}/>
                }
            )}
        </div>
    }
}

export default Products