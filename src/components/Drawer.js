import React from 'react'

export default function Drawer({onClose, onRemove, items = [] }) {
  return (
    <div style={{ display: 'block' }} className="overlay">
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
            Корзина 
                <img 
                    className="cu-p" 
                    src="/img/btn-remove.svg" 
                    alt="Remove" 
                    onClick={onClose}
                />
            </h2>

            {
                items.length > 0 ?  (           
                    <div >
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
                                <img 
                                    onClick={() => onRemove(obj.id)}
                                    className="removeBtn" 
                                    src="/img/btn-remove.svg" 
                                    alt="Remove"
                                />
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
                ) : (
                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className='mb-20' width={120} height={120} src="/img/empty-cart.jpg" alt="" />
                    <h2>Корзина пуста</h2>
                    <p className="opacity-6">Добавте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
                    <button onClick={onClose} className="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow" />
                        Вернуться назад
                    </button>
                </div>
                )}





        </div>
    </div>
  )
}
