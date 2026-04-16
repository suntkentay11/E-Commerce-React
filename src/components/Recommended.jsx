import React from "react";
import Book from "./ui/Book";
import { books } from "../data.js";
import { useParams } from "react-router-dom";

const Recommended = ({ selectedBook }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);

    return (
        <section id="recommended">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Recommended <span className="purple">Books</span></h2>
                    <p className="section__description">Discover your next great read with our handpicked selection of recommended books, curated to inspire and captivate readers of all tastes.</p>
                </div>
                <div className="books">
                    {books
                        .filter(b => +book.id !== +b.id)
                        .slice(0, 4)
                        .map(book => <Book book={book} key={book.id} />)}
                </div>
            </div>
        </section>
    );
}

export default Recommended;