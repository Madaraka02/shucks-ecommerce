import React,{useState, useEffect} from 'react';
import './Payment.css';
import firebase from 'firebase';
import db from './firebase';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";

function Payment() {
    const [{ basket }] = useStateValue();
    const [orders, setOrders] = useState();
    const [input ,setInput] = useState();
    const [location ,setLocation] = useState();

  
  
    useEffect(() => {
      db.collection("orders").orderBy("timestamp", "desc").onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({id: doc.id ,order: doc.data().order})))
      })
   
    }, []);
  
    const addOrder = (event) => {
      event.preventDefault(); 
      db.collection("orders").add({
        order: {basket},input, location,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput([]);
      setLocation("");
      alert("order submitted we will contact you soon")
  
    }
  

    return (
        <div className="payment">
            <div className="payment__reviews">
            <h3>Review your orders</h3>
            {basket.map((item) => (
                    <CheckoutProduct
                    id={item.id}  
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))}
            </div>
            <div className="payment__order">
              <h6 className="order__title">Shipping fees varies according to location</h6>
                <input value={input} onChange={event => setInput(event.target.value)} placeholder="Enter PhoneNumber" type="tel" size="10" minLength="10" maxLength="10" required/>
                <input value={location} onChange={event => setLocation(event.target.value)} placeholder="Enter your location" type="text"  required/>
            <button disabled={!input} onClick={addOrder} className="button">
                confirm order</button>
                <Link to="/">
                <button className="button__back">
                Contine shopping</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Payment
