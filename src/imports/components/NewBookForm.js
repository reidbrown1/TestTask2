import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  // const [originalCity, setOriginalCity] = useState('');
  // const [originalState, setOriginalState] = useState('');
  // const [originalZip, setOriginalZip] = useState('');
  // const [originalCountry, setOriginalCountry] = useState('');
  const [deliveryAddy, setDeliveryAddy] = useState('');
  const [deliveryZip, setDeliveryZip] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryState, setDeliveryState] = useState('');
  const [deliveryCountry, setDeliveryCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfBoxes, setnumberOfBoxes] = useState('');

  const [message, setMessage] = useState(""); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { firstName, lastName, deliveryDate, deliveryAddy, 
      deliveryDate, deliveryCity, deliveryState, deliveryCountry, phoneNumber, 
      numberOfBoxes, deliveryZip }});
    setFirstName('');
    setLastName('');
    // setOriginalCity('');
    setDeliveryDate('');
    // setOriginalState('');
    // setOriginalZip('');
    // setOriginalCountry('');
    setDeliveryAddy('');
    setDeliveryZip('');
    setDeliveryCity('');
    setDeliveryState('');
    setDeliveryCountry('');
    setPhoneNumber('');
    setnumberOfBoxes('');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="First Name" value={firstName}
        onChange={(e) => setFirstName(e.target.value)} required />
        
        <input type="text" placeholder="Last Name" value={lastName}
        onChange={(e) => setLastName(e.target.value)} required />
        
        <input type="text" placeholder="Delivery Date (M/D/Y)" value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)} required />
        
        <input type="text" placeholder="Delivery City" value={deliveryCity}
        onChange={(e) => setDeliveryCity(e.target.value)} required />
        
        <input type="text" placeholder="Delivery State" value={deliveryState}
        onChange={(e) => setDeliveryState(e.target.value)} required />
       
        <input type="text" placeholder="Delivery Country" value={deliveryCountry}
        onChange={(e) => setDeliveryCountry(e.target.value)} required />
        
        <input type="text" placeholder="Delivery Address" value={deliveryAddy}
        onChange={(e) => setDeliveryAddy(e.target.value)} required />
        
        <input type="text" placeholder="Phone Number" value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)} required />

        <input type="text" placeholder="Number of boxes" value={numberOfBoxes}
        onChange={(e) => setnumberOfBoxes(e.target.value)} required />

        <input type="submit" value="Place Order" onClick={() => setMessage("Thank you for placing your order!")}/>
        <p>{message}</p>
      </div>
    </form>
  );
}
 
export default NewBookForm;