import {React, useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"
import {getRecipe} from '../../Services/RecipeService'
import Nav from '../NavMain/Nav'
import './style.css'

export const RecipeDetails = () => {
    const recipeId = parseInt(new URLSearchParams(useLocation().search).get('id'))
    const [recipe, setRecipe] = useState()

    const isFavorite = true

    useEffect(() => {
        async function fetchData() {
            let recipe = await getRecipe(recipeId)
            setRecipe(recipe)
        }

        fetchData()
    }, [recipeId])

    const imgSize = "250px"
    return (
        <div>
            <Nav/>
            {recipe &&
            <div id='recipe-details'>
                <div className="section-title text-center center">
                    <div className="overlay">
                        <div className='recipe-info'>
                            <h2>{recipe.title}</h2>
                            <p>Time: {recipe.time}</p>
                            <p>Servings: {recipe.servings}</p>
                            <hr/>
                            <p>{recipe.description}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <button
                        className={isFavorite ? "btn-rf-primary" : "btn-rf-secondary"}>Favorite
                    </button>
                    <Link to={"/recipes/fav/" + recipeId} className="btn-rf-secondary">Plan</Link>
                </div>
                <div className='container'>
                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                    </ul>
                    <h2>Steps</h2>
                    <ul>
                        {recipe.steps.map((step, index) => <li key={index} style={{listStyleType: "none"}}>{step}</li>)}
                    </ul>
                    <ul>
                        {recipe.images.map((src, index) => <li key={index} style={{listStyleType: "none"}}>
                            <img src={src} style={{width: imgSize, height: imgSize, float: "left"}} alt={"..."}/>
                        </li>)}
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}