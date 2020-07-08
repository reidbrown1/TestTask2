import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
// import index from '../index'
import '../index.css'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div style={{margin:10}}>
    <table id="conditionManager">
          <tr>
              <th > Delivery Date </th>
              <th > Delivery Shift </th>
              <th > Origin Name </th>
              <th > Origin_raw_line_1 </th>
              <th > Origin City </th>
              <th > Origin State </th>
              <th > Origin Zip </th>
              <th > Origin Country </th>
              <th > Client name </th>
              <th > Destination_raw_line_1 </th>
              <th > Destination City </th>
              <th > Destination State </th>
              <th > Destination Country </th>
              <th > Phone Number </th>
              <th > Mode </th>
              <th > Purchase Order Number </th>
              <th > Volume </th>
              <th > Handling_unit_quantity </th>
              <th > handling_unit_type </th>
              <th style={{color:'red'}}>Complete</th>
          </tr>
          <tr>
            <td >{book.deliveryDate} </td>
            <td >M</td>
            <td>Larkin LLC</td>
            <td>1505 S BLOUNT ST</td>
            <td >Raleigh</td>
            <td>NC</td>
            <td >27603</td>
            <td>US</td>
            <td >{book.firstName} {book.lastName}</td>
            <td>{book.deliveryAddy}</td>
            <td >{book.deliveryCity} </td>
            <td >{book.deliveryState} </td> 
            <td >{book.deliveryCountry} </td>
            <td >{book.phoneNumber} </td>
            <td>TRUCKLOAD</td>
            <td>//random number</td>
            <td>volume</td>
            <td>{book.numberOfBoxes}</td>
            <td >box</td> 
           
            <td><button onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>complete</button></td>
          </tr>
      </table>
    </div>
  );
}

export default BookDetails;