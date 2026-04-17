import React from "react";
import { books } from "../data.js";

const Cart = () => {
    return (
        <section id="cart">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <span className="cart__book">Book</span>
                            <span className="cart__quantity">Quantity</span>
                            <span className="cart__price--header">Price</span>
                        </div>
                        <div className="cart__body">
                            <div className="cart__item">
                                <div className="cart__book">
                                    <img src={books[0].url} alt={books[0].title} className="cart__img" />
                                    <div className="cart__details">
                                        <h3 className="cart__book--title">{books[0].title}</h3>
                                        <p className="cart__price">${books[0].price}</p>
                                        <button className="cart__book--remove">Remove</button>
                                    </div>
                                </div>
                                <div className="cart__quantity">
                                    <input type="number" min={0} max={99} className="cart__input" />
                                </div>
                                <div className="cart__total">
                                    <span className="cart__total--price">${books[0].price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="total__item total__sub-total">Subtotal: ${books[0].price}</div>
                        <div className="total__item total__tax">Tax: ${books[0].price * 0.1}</div>
                        <div className="total__item total__price">Total: ${books[0].price * 1.1}</div>
                        <button className="btn btn__checkout no-cursor" onClick={() => alert(`Haven't gotten around to doing this :(`)}>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;