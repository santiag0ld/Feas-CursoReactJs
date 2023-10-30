import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Timestamp, collection, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, query, where, documentId, addDoc } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './Checkout.css'
import { Link } from "react-router-dom";


const Checkout = () => {
    const[loading, setLoading] = useState(false);
    const[orderId, setOrderId] = useState('');

    const{cart, totalQuantity, clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalQuantity,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('hay productos que estan fuera de stock')
            }
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    };

    if (loading) {
        return (
            <div className="mt-5 mb-5 text-center">
                <h2>Generando la orden...</h2>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="mt-5 mb-5 text-center">
                <h2>El id de su orden es: {orderId}</h2>
                <Link to='/' className='btn'>Volver</Link>
            </div>

        );
    }

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;
