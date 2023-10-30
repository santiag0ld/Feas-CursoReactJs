import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({id, img, name, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="itemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='btn'>Finalizar compra</Link>
                    ) : (
                <ItemCount className='Contador' initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail