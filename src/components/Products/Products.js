import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [porducts, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = porducts.filter(porduct => porduct._id !== id);
                        setProducts(remainingUsers)
                    }
            })
        }
    }


    return (
        <div>
            <ul>
                {
                    porducts.map(product => <li key={product._id}>{product.name} ||| {product.price} ||| {product.quantity} <Link to={`/products/update${product._id}`}><button>Details</button></Link>  <button onClick={()=>handleDeleteProduct(product._id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

export default Products;