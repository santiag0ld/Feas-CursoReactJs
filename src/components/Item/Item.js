import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, img, name, price, stock}) =>{

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
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item