import React, { useState } from 'react'
import Card from './Card';
import { productList } from '../data/Data';
import PopupCard from './PopupCard';
import './ProductsList.css';




export default function ProductsList(props) {

    let [pList, setPList] = useState(productList);

    function handleAddInc(val) {
        const newPList = pList.map((data) => {
            if (data.name == val) {
                return { ...data, orderQ: data.orderQ + 1 }
            } else {
                return data;
            }
        })
        setPList(newPList);
        // console.log(val,'productList');
    }


    function handleAddDec(val) {
        const newPList = pList.map((data) => {
            if (data.name == val) {
                if (data.orderQ == 0) {
                    return ({ ...data, orderQ: data.orderQ = 0 })
                }
                else {
                    return { ...data, orderQ: data.orderQ - 1 }
                }
            } else {
                return data;
            }
        })
        setPList(newPList);

    }

    function handleHeaderCount(name) {
        const newPList = pList.map((data) => {
            if (data.name == name && data.addedToCart == 0) {
                return { ...data, addedToCart: 1 }
            } else {
                return data;
            }
        })
        setPList(newPList);
        checkAddedCount();
    }

    checkAddedCount();

    function checkAddedCount() {
        let count = 0;
        pList.forEach((val) => {
            if (val.addedToCart == 1) {
                count++;
            }
        })
        props.onHeaderCount(count);
    }

    return (
        <div className='df-space'>

            {
                
                pList.map((val) => {
                    if (val.category.includes(props.status)){
                    return (

                        <Card cardData={val} onAddInc={(val) => { handleAddInc(val) }} onAddDec={(val) => { handleAddDec(val) }} onHeaderCount={(val) => { handleHeaderCount(val) }} />

                    )

                    }
                }
                )}
            <PopupCard triggerPopup={props.triggerPopup} pList={pList} onCloseCart={props.onCloseCart} />

        </div>
    )
}
