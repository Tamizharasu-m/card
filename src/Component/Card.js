import React from 'react'
import './Card.css';

export default function Card(props) {
    return (

        <div className='card-in' key={props.cardData.id}>
            <img className='card-img' src={props.cardData.img} alt='' />
            <h2 className='card-head'>{props.cardData.name}</h2>
            <div className='card-price'><span>Rs.{props.cardData.price}</span> || <span>{props.cardData.quantity}Kg</span></div>
            <div className='card-inc'><button className='btn1' onClick={() => { props.onAddInc(props.cardData.name) }}>+</button><span>Rs.{parseInt(props.cardData.price) * parseInt(props.cardData.orderQ)}</span>
                <button className='btn2' onClick={() => { props.onAddDec(props.cardData.name) }}>-</button><span>{parseFloat(props.cardData.quantity) * parseInt(props.cardData.orderQ)}Kg</span></div>
            <div onClick={() => { props.onHeaderCount(props.cardData.name) }} className='card-btn' ><button className="button" >Add To Cart</button></div>
        </div>

    )
    
}
