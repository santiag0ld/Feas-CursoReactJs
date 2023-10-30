import { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
          ? query(collection(db, 'productos'), where('category', '==', categoryId))
          : collection(db, 'productos')

        getDocs(collectionRef)
          .then(response => {
            const productsAdaptated = response.docs.map(doc =>{
              const data = doc.data()
              return { id: doc.id, ...data}
            });
            setProducts(productsAdaptated);
            })
            .catch(error => {
              console.error(error);
            })
            .finally(() => {
              setLoading(false)
            });
  }, [categoryId]);  

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {categoryId ? (
            <ItemList products={products} />
          ) : (
            <div>
              <h1>Bienvenido a nuestra tienda!</h1>
              <ItemList products={products} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
