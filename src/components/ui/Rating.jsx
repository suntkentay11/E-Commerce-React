import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<FontAwesomeIcon icon="star" key={i} />);
    }
    if (rating % 1 !== 0) {
        stars.push(<FontAwesomeIcon icon="star-half-alt" key="half" />);
    }
    return <div className="rating">{stars}</div>;
};

export default Rating;