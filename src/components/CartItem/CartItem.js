import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext);

    const totalItemPrice = price * quantity;

    const handleRemoveItemClick = () => {
        removeItem(id);
    };

    return (
        <div className="list-group-item">
            <div className="d-flex justify-content-around">
                <div>
                    <h5 className="mb-1">{name}</h5>
                    <p className="mb-1">Cantidad: {quantity}</p>
                    <p className="mb-1">Precio unitario: ${price}</p>
                    <p>Monto total: ${totalItemPrice}</p>
                </div>
                <button onClick={handleRemoveItemClick} className="btn">X</button>
            </div>
        </div>
    );
};

export default CartItem;
