import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="Cart text-center mt-5">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="btn">
                    Agregar productos
                </Link>
            </div>
        );
    }

    return (
        <div className="Cart">
            <h3 className="mt-5 mb-5 text-center">Carrito de Compras</h3>
            <div className="list-group">
                {cart.map((p) => (
                    <CartItem key={p.id} {...p} />
                ))}
            </div>
            <div className="text-center mt-5">
                <h4>Total: ${total}</h4>
                <Link to="/" className="btn mt-3 ms-3">
                   Continuar Comprando
                </Link>
                <button onClick={() => clearCart()} className="btn mt-3 ms-3">
                    Limpiar carrito
                </button>
                <Link to="/checkout" className="btn mt-3 ms-3">
                    Checkout
                </Link>
                
            </div>
        </div>
    );
};

export default Cart;

