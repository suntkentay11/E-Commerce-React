import React from "react";
import Book from "./ui/Book";
import { books } from "../data.js";

const Discounted = () => {

    return (
        <section id="discounted">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Discounted <span className="purple">Books</span>!</h2>
                    <div className="books">
                        {books
                        .filter(b => b.salePrice)
                        .sort((a,b) => (b.originalPrice - b.salePrice) - (a.originalPrice - a.salePrice))
                        .slice(0, 8)
                        .map(book => <Book book={book} key={book.id} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;