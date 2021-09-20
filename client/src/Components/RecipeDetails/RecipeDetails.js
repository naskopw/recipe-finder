import {React, useState, useEffect} from 'react'
import {useLocation} from "react-router-dom"
import {getRecipe} from '../../Services/RecipeService'
import Nav from '../NavMain/Nav'
import './style.css'

export const RecipeDetails = () => {
    const recipeId = parseInt(new URLSearchParams(useLocation().search).get('id'))
    const [recipe, setRecipe] = useState()

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
                            {/* <i onClick={addToFavorite} className={favoriteImgClass}></i> */}
                            <p>{recipe.description}</p>
                        </div>
                    </div>
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