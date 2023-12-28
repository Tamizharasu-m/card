import React from 'react';
import './Navbar.css';

export default function Navbar(props) {

  function handleClick(a) {
    // console.log(a);
    props.onData(a);
  }

  return (
    <div className='navbar'>
      <ul className='navbar-in'>
        <li onClick={() => { handleClick('all') }}>All productList</li>
        <li onClick={() => { handleClick('vegetable') }} >Vegetable</li>
        <li onClick={() => { handleClick('fruit') }} >Fruits</li>
        <li onClick={() => { handleClick('cake') }} >Cake</li>
      </ul>
    </div>
  )
}
