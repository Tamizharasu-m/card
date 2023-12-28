import React from 'react';
import './PopupCard.css';
import { AiFillDelete } from 'react-icons/ai';

export default function PopupCard(props) {
  if (props.triggerPopup) {
    return (
      <div className='popup'>
        <div className='popup-in'>
          <button onClick={props.onCloseCart} className='close'>X</button>
          <h1 className='popup-text'>Add to Cart</h1>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>OrderedQ</th>
              </tr>
              {
                props.pList.map((data) => {
                  if (data.addedToCart > 0) {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.quantity}</td>
                        <td>{data.orderQ}</td>
                        <td><AiFillDelete /></td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  else {
    return null;
  }

}
