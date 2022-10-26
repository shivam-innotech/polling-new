import React from 'react';
import { useSelector } from 'react-redux';

const UserCart = () => {
    const products = useSelector((state) => state.cart);

    return (
        <div>
            <h3>Polls</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        {/* <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5> */}
                        <p>{product['title']}</p>
                        <div className="btns">
                            <label for="age1">Option 1</label>
                            <input className='btn' type="radio" id="age1" name="age" value="30" /><br />

                            <label for="age1">Option 2</label>
                            <input className='btn' type="radio" id="age2" name="age" value="60" /><br />

                            <label for="age1">Option 3</label>
                            <input className='btn' type="radio" id="age3" name="age" value="100" /><br />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserCart;