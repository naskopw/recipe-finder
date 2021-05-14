import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { RecipeOverview } from '../Components/RecipeOverview'

import { RecipeMockService } from "../Services/RecipeMockService"
export const Home = () => {
    const TRENDING_SIZE = 10
    const start = Math.floor(Math.random() * RecipeMockService.length - TRENDING_SIZE)
    const trendingRecipes = RecipeMockService.slice(start, start + TRENDING_SIZE)

    return (
        <div>
            {trendingRecipes.map((recipe, index) =>
                <Link key={index} to={`/details?id=${index}`}><RecipeOverview recipe={recipe}></RecipeOverview></Link>)}
        </div>
    )
}
