import React from 'react'

export const RecipeOverview = (props) => {
    const recipe = props.recipe
    const imgSize = "250px"

    return (
        <div style={{ border: "2px solid black" }}>
            <p>{recipe.title}</p>
            <img key={recipe.id} src={recipe.image} style={{ width: imgSize, height: imgSize }}></img>
            <p>Servings: {recipe.servings}</p>
            {recipe.time && <p>Time: {recipe.time}</p>}
        </div>
    )
}
