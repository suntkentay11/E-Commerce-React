import React from "react";
import Books from "../assets/Undraw_Books.png";

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Discover Your Next Great Read</h1>
                        <h2 className="header__subtitle">Explore our curated collection of books and find your next favorite story with <span className="purple">Library</span>.</h2>
                        <p className="header__para"> From timeless classics to contemporary bestsellers, we have something for every reader.</p>
                        <a href="#features" className="btn">Browse Books</a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={Books} alt="Reading"/>
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;