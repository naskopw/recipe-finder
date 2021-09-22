import React from 'react';
import "./style.css"

const CategoryOverviewCard = ({category}) => {
    return (
        <div className="category-overview-card">
            <img src={decodeURI(category.image)} alt="..."/>
            <div className="container-text text-center">
                <h2>{category.name}</h2>
            </div>
        </div>
    );
};

export default CategoryOverviewCard;
