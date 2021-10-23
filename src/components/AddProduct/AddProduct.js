import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProducts = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;

        const newProduct = { name, price, quantity };

        fetch('http://localhost:5000/Products', {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user');
                    e.target.reset();
            }
        })
        e.preventDefault();
    }



    return (
        <div>
            <h2>Please add a product!!!!!!!!!</h2>
            <form onSubmit={handleAddProducts}>
                <input type="text" ref={nameRef} />
                <input type="text" ref={priceRef} />
                <input type="text" ref={quantityRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;