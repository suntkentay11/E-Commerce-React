import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">Library</span>?
                    </h2>
                    <div className="highlight__wrapper"> 
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} title="Easy and Quick" description="Get access to the book you purchased online instantly." />
                        <Highlight icon={<FontAwesomeIcon icon="book-open" />} title="10,000+ Books" description="Choose from a vast collection of books across various genres." />
                        <Highlight icon={<FontAwesomeIcon icon="tags" />} title="Affordable" description="Enjoy competitive pricing on all our books, making reading accessible to everyone." />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;