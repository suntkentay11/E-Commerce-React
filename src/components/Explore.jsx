import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {

    return (
        <section id="explore">
            <div className="container">
                <div className="row">
                    <h2 className="section__title section__title--explore">Explore Our <span className="purple">Collection</span></h2>
                    <Link to="/books" className="btn">Browse Books</Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;