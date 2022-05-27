import React from 'react'

export default function Drawer({onClose, items = [] }) {
  return (
    <div style={{ display: 'block' }} className="overlay">
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
            Корзина <img 
                        className="cu-p" 
                        src="/img/btn-remove.svg" 
                        alt="Remove" 
                        onClick={onClose}
                    />
            </h2>

            <div className="items">
                { items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                    <div 
                        style={{ backgroundImage: `url(${obj.imageUrl})` }} 
                        className="cartItemImg"
                    >
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price} грн.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
                )) }
            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 грн. </b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 грн.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"></img></button>
            </div>
        </div>
    </div>
  )
}
