import React from 'react'

export const RecipeOverview = (props) => {
    const recipe = props.recipe
    const imgWidth = "400px"
    const imgHeight = "220px"
    return (
        <div className="trending-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="trending-item">
                    <div className="hover-bg">
                            <div className="hover-text">
                                <h4>{recipe.title}</h4>
                                <p>Servings: {recipe.servings}</p>
                                {recipe.time && <p>Time: {recipe.time}</p>}
                            </div>
                            <img key={recipe.id} src={recipe.image} className="img-responsive" alt="Project Title" style={{ width: imgWidth, height: imgHeight }}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}