import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    return (
        <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={book.url} alt={book.title} className="book__img" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>
            <div className="book__ratings">
                {
                    new Array(Math.floor(book.rating)).fill().map((_, i) => <FontAwesomeIcon icon="star" key={i} />)
                }
                {
                    book.rating % 1 !== 0 && <FontAwesomeIcon icon="star-half-alt" />
                }
            </div>
            <div className="book__price">
                {book.salePrice ? (
                    <>
                        <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>${book.salePrice.toFixed(2)}
                    </>
                ) : (
                    <>${book.originalPrice.toFixed(2)}</>
                )}
            </div>
        </div>
    );
}

export default Book;
