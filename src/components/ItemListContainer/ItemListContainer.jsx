import React, { useEffect, useState } from "react";
import { db } from "../../firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      let q;
      if (categoryId) {
        q = query(collection(db, "items"), where("category", "==", categoryId));
      } else {
        q = collection(db, "items");
      }
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(items);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h3>{greeting}</h3>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;