import React from "react";
import { books } from "../data.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = ({ books }) => {

    return (
        <section id="detail">
                <div className="container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="details__back"><FontAwesomeIcon icon="arrow-left" /> Books</Link>
                        </div>
                        <figure className="details__img--wrapper">
                            <img src={books.url} alt={books.title} className="details__img" />
                        </figure>
                        <div className="details__content">
                            <h1 className="details__title">{books.title}</h1>
                            <p className="details__author">{books.author}</p>
                            <p className="details__rating">{books.rating}</p>
                            <p className="details__price">{books.price}</p>
                            <p className="details__description">{books.description}</p>
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Detail;