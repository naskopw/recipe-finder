import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";

const CategoryOverviewCard = ({category}) => {
    return (
        <div className="category-overview-card">
            <img src={decodeURI(category.image)} alt="..."/>
            <div className="container-text">
                <h2>{category.name}</h2>
            </div>
        </div>
    );
};

export default CategoryOverviewCard;
