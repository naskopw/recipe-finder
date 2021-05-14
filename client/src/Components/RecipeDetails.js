import React from 'react'
import { RecipeDetailsService } from "../Services/RecipeDetailsService"
import { useLocation } from "react-router-dom"
export const RecipeDetails = () => {
    const recipeId = parseInt(new URLSearchParams(useLocation().search).get('id'))
    const recipe = RecipeDetailsService[recipeId]
    const imgSize = "250px"
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.desc}</p>
            {recipe.time && <p>Time: {recipe.time}</p>}
            {recipe.servings && <p>Servings: {recipe.servings}</p>}
            <p>Ingredients:</p>
            <ul>
                {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <ul>
                {recipe.steps.map((step, index) => <li key={index} style={{ listStyleType: "none" }}>{step}</li>)}
            </ul>
            <ul>
                {recipe.images.map((src, index) => <li key={index} style={{ listStyleType: "none" }}>
                    <img src={src} style={{ width: imgSize, height: imgSize, float: "left" }}></img>
                </li>)}
            </ul>
        </div>
    )
}
