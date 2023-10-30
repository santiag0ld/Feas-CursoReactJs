import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };

        onConfirm(userData);
    };

    return (
        <div className="checkout-form-container">
            <form onSubmit={handleConfirm} className="checkout-form">
                <label className="checkout-label">
                    Nombre
                    <input
                        className="checkout-input"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className="checkout-label">
                    Teléfono
                    <input
                        className="checkout-input"
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="checkout-label">
                    Email
                    <input
                        className="checkout-input"
                        type="text"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className="checkout-button-container">
                    <button type="submit" className="checkout-button">
                        Crear Orden
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
