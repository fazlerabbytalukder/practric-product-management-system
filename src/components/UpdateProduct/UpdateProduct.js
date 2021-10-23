import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    
    //update user
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedProduct = { name: updatedName, price: product.price, quantity:product.quantity };
        setProduct(updatedProduct);
    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedProduct = { name: product.name, price: updatedPrice, quantity:product.quantity };
        setProduct(updatedProduct);
    }
    const handleQuantityChange = e => {
        const updatedQuantity = e.target.value;
        const updatedProduct = { name: product.name, price: product.price, quantity:updatedQuantity };
        setProduct(updatedProduct);
    }
    const handleUpdateProduct = e => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated Successfull')
                    setProduct({});
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>The Product Is:{product.name}</h2>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" onChange={handleNameChange} value={product.name || ''} />
                <input type="text" onChange={handlePriceChange} value={product.price || ''} />
                <input type="text" onChange={handleQuantityChange} value={product.quantity || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;<h2>update product</h2>