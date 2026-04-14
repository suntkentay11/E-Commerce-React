import React from "react";
import Book from "./ui/Book";
import { books } from "../data.js";

const Features = () => {

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Featured <span className="purple">Books</span></h2>
                    <div className="books">
                        {books
                        .filter(b => b.rating === 5 || b.rating === 4.5)
                        .sort((a,b) => b.rating - a.rating)
                        .slice(0, 4)
                        .map(book => <Book book={book} key={book.id} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;