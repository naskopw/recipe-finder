import React from 'react';

const RecipeOverview = ({recipe}) => {
    const imgWidth = "400px"
    const imgHeight = "220px"

    return (
        <div className="trending-item">
            <div className="hover-bg">
                <div className="hover-text">
                    <h4>{recipe.title}</h4>
                    <p>Servings: {recipe.servings}</p>
                    {recipe.time && <p>Time: {recipe.time}</p>}
                </div>
                <img key={recipe.id} src={recipe.image} alt="Project Title"
                     style={{width: imgWidth, height: imgHeight}}/>
            </div>
        </div>);
};

export default RecipeOverview;