import React from 'react'
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header(props) {
  return (
    <div className='bg'>
      <div className='df header-space'>
        <div className=' header-img'>
          <img src='../Images/web-logo-2.png' />
        </div>
        <div className=''>
          <ul className='df links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Product List</a></li>
            <li><a href='#'>Service</a></li>
          </ul>
        </div>
        <div className=' header-icon df jcsb'>
        <div className='df icon-center header-add' onClick={props.onTriggerPopup}>
        <FaShoppingCart className='header-add1 ' />
          <h2 > ({props.headerCount})</h2>
          </div>
          <input className='head-search' type='search' placeholder='Search'/>
          <div className='btn'><button className='header-btn'>Login</button></div>
        </div>
      </div>
    </div>
  )
}

