import React, { useState } from "react";
import { books } from "../data.js";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Recommended from "../components/Recommended.jsx";
import Rating from "../components/ui/Rating.jsx";
import Price from "../components/ui/Price.jsx";

const Detail = ({ books, addToCart }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);

    function addBookToCart(book) {
        addToCart(book);
    }

    function bookExists() {
        return books.find(book => +book.id === +id);
    }

    return (
        <section id="detail">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="details__back"><FontAwesomeIcon icon="arrow-left" /></Link>
                            <Link to="/books" className="details__back--text">Back to Books</Link>
                        </div>
                        <div className="book__selected--bottom">
                            <figure className="details__img--wrapper">
                                <img src={book.url} alt={book.title} className="details__img" />
                            </figure>
                            <div className="details__content">
                                <h1 className="details__title">{book.title}</h1>
                                <p className="details__author">{book.author}</p>
                                <Rating rating={book.rating} />
                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                <div className="details__description">{book.description.map((para, i) => (
                                    <p key={i} className="details__para">{para}</p>
                                    ))}</div>
                                {
                                bookExists() ? 
                                <Link to="/cart"><button className="btn" disabled>Checkout</button></Link> : 
                                (<button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>)
                                }
                            </div>
                        </div>
                        <Recommended />
                    </div>
                </div>
        </section>
    );
}

export default Detail;