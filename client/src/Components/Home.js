import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { RecipeOverview } from '../Components/RecipeOverview'

import { getTrending } from "../Services/RecipeService"
export const Home = () => {
    const [trendingRecipes, setTrendingRecipes] = useState([])

    useEffect(() => {
        async function fetchData() {
            let trending = await getTrending()
            setTrendingRecipes(trending)
        }
        fetchData()
    }, [])

    return (
        <div>
            {trendingRecipes.map(recipe =>
                <Link key={recipe.index} to={`/details?id=${recipe.index}`}><RecipeOverview recipe={recipe}></RecipeOverview></Link>)}
        </div>
    )
}
