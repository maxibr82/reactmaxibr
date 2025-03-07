import React, { useContext, useState } from 'react';
import { Timestamp, writeBatch, collection, getDocs, query, where, documentId, addDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { db } from '../../firebase/FirebaseConfig';
import { CarContext } from '../context/CarContext';
import './Checkout.css';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');

  const { cart, total, clearCart } = useContext(CarContext);

  const createOrder = async ({ name, phone, email }) => {
    if (cart.length === 0) {
      setError('El carrito está vacío. No se puede crear una orden.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((item) => item.id);

      const productsRef = collection(db, 'items');

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productsAddedToCart = cart.find((item) => item.id === doc.id);
        const prodQuantity = productsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        setError('Algunos productos están fuera de stock.');
      }
    } catch (error) {
      console.error(error);
      setError('Ocurrió un error al crear la orden. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className='pantalla-carga'><p>Cargando tu pedido...</p></div>;
  }

  if (orderId) {
    return <div className='compra-completada'><p>Gracias por tu compra, el id de su compra es: <strong>{orderId}</strong></p></div>;
  }

  return (
    <div className='form-checkout-container'>
      <h1>Checkout</h1>
      {error && <p className='error-message'>{error}</p>}
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;