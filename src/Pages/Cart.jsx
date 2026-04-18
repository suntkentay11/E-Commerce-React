import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const subTotal = cart.reduce((total, book) => total + (book.salePrice || book.originalPrice) * book.quantity, 0);
    const tax = subTotal * 0.1;
    const total = subTotal + tax;

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
                            {
                                cart.map(book => {
                                    return (
                                        <div className="cart__item">
                                            <div className="cart__book">
                                                <img src={book.url} alt={book.title} className="cart__img" />
                                                <div className="cart__details">
                                                    <h3 className="cart__book--title">{book.title}</h3>
                                                    <p className="cart__price">${(book.salePrice || book.originalPrice).toFixed(2)}</p>
                                                    <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input type="number" min={0} max={99} className="cart__input" 
                                                value ={book.quantity}
                                                onChange={(e) => changeQuantity(book, e.target.value)} />
                                            </div>
                                            <div className="cart__total">
                                                <span className="cart__total--price">${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        {cart.length === 0 && <div className="cart__empty">
                            <img src={EmptyCart} alt="Empty Cart" className="cart__empty--img" />
                            <h2 className="cart__empty--text">Your cart is empty</h2>
                            <Link to="/books"><button className="btn browse__books">Browse Books</button></Link>
                        </div>}
                    </div>
                    {cart.length > 0 && <div className="total">
                        <div className="total__item total__sub-total">Subtotal: ${subTotal.toFixed(2)}</div>
                        <div className="total__item total__tax">Tax: ${tax.toFixed(2)}</div>
                        <div className="total__item total__price">Total: ${total.toFixed(2)}</div>
                        <button className="btn btn__checkout no-cursor" onClick={() => alert(`Haven't gotten around to doing this :(`)}>Checkout</button>
                    </div>}
                </div>
            </div>
        </section>
    );
}

export default Cart;