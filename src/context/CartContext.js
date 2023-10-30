import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0); 
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prevCart) => [...prevCart, { ...item, quantity }]);
            setTotalQuantity((prevTotal) => prevTotal + quantity);
            setTotal((prevTotal) => prevTotal + item.price * quantity);
        } else {
            console.error("El producto ya se encuentra en el carrito");
        }
        
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        const removedItem = cart.find((prod) => prod.id === itemId);
        if (removedItem) {
            setTotalQuantity((prevTotal) => prevTotal - removedItem.quantity);
            setTotal((prevTotal) => prevTotal - removedItem.price * removedItem.quantity);
        }
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
