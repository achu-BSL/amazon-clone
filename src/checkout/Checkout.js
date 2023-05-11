import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout(){
    return (
        <div className='checkout'>
            <div
            className='checkout__left'>
               <img 
               className='checkout__ad'
               src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/LIVE/CatIngress/D75091756_INWLD_Amazon_Live1242.gif'
               alt=''
               />
               <div
               className=''>
                   <h2 
                   className='checkout__title'>
                   Your shoping Basket
                   </h2>
               </div>
            </div>

            <div 
            className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout