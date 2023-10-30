import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const[loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId);

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdaptated = {id: response.id, ...data}
            setProduct(productAdaptated)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        });
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
          {loading ? (
            <div>Cargando...</div>
          ) : (
            product && <ItemDetail {...product} /> 
          )}
        </div>
      );
    };

export default ItemDetailContainer