import { Link } from "react-router-dom"
import { RecipeOverview } from '../RecipeOverview'
import { React, useEffect, useState } from 'react'
import { getTrending } from "../../Services/RecipeService"
import './style.css'

export const Trending = () => {
    const [trendingRecipes, setTrendingRecipes] = useState([])

    useEffect(() => {
        async function fetchData() {
            let trending = await getTrending()
            setTrendingRecipes(trending)
        }
        fetchData()
    }, [])


    return (
        <div id="trending">
            <div className="section-title text-center center">
                <div className="overlay">
                    <h2>Trending</h2>
                    <hr />
                    <p>Try out our most liked recipes.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="#" data-filter="*" className="active">All</a></li>
                                    <li><a href="#" data-filter=".breakfast">Today</a></li>
                                    <li><a href="#" data-filter=".lunch">This week</a></li>
                                    <li><a href="#" data-filter=".dinner">this mounth</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                        <div className="row">
                            {trendingRecipes.map(recipe =>
                                <Link key={recipe.id} to={`/recipes/?id=${recipe.id}`}><RecipeOverview recipe={recipe}></RecipeOverview></Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
