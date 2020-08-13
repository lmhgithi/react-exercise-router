import React, { Component } from 'react';

class Product extends Component {
    state = {
        product: {},
    }

    componentDidMount() {
        const data = {
            "bicycle": {
                "id": 1,
                "name": "Bicycle",
                "price": 30,
                "quantity": 15,
                "desc": "Bicycle is Good"
            },
            "TV": {
                "id": 2,
                "name": "TV",
                "price": 40,
                "quantity": 16,
                "desc": "TV is good"
            },
            "pencil": {
                "id": 3,
                "name": "Pencil",
                "price": 50,
                "quantity": 17,
                "desc": "Pencil is good"
            }
        }

        for (let key in data) {
            console.log(data[key].id, this.props.match.params.id)
            if (data[key].id == this.props.match.params.id) {
                this.setState({
                    product: data[key],
                });
                break;
            }
        }
    }



    render() {
        return (
            <div className="about">
                <h2>Product Details:</h2>
                <h3>Name: {this.state.product.name}</h3>
                <h3>Id: {this.state.product.id}</h3>
                <h3>Price: {this.state.product.price}</h3>
                <h3>Quantity: {this.state.product.quantity}</h3>
                <h3>URL: {"/products/" + this.props.match.params.id}</h3>
            </div>
        )
    };
}

export default Product;