import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css'
class Products extends Component {
    state = {
        products: [],
    }
    componentDidMount() {
        this.setState({
            products: [
                {
                    "name": "bicycle",
                    "id": 1,
                },
                {
                    "name": "TV",
                    "id": 2,
                },
                {
                    "name": "pencil",
                    "id": 3,
                },
            ],
        })
    }
    render() {
        return (
            <div className="products">
                <h2>ALL Products:</h2>
                {
                    this.state.products.map(product => (
                        <Link className="productsLink" 
                        key={product.id}
                        // to={"/products/" + product.id}>{product.name}</Link>
                        to={`/products/${product.id}`}>{product.name}</Link>
                    ))
                }
            </div>
        )
    };
}

export default Products;