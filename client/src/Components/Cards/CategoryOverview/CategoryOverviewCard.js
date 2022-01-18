import React from 'react';
import "./style.css"

const CategoryOverviewCard = ({ category }) => {
    return (
        <div className="category-overview-card">
            <img src={category ?
                decodeURIComponent(category.image) : "/img/null.png"
            } alt="..." />
            <div className="container-text text-center">
                <h2>{category ? category.name : "Not found"}</h2>
            </div>
        </div>
    );
};

export default CategoryOverviewCard;
