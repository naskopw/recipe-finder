import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./style.css"
import RecipeOverview from "../../RecipeOverview/RecipeOverview";
import {getTrending} from "../../../Services/RecipeService";

const Trending = () => {
    const [trendingRecipes, setTrendingRecipes] = useState([])

    useEffect(() => {
        async function fetchData() {
            let trending = await getTrending()
            setTrendingRecipes(trending)
        }

        fetchData()
    }, [])

    return (
        <section id="section-trending">
            <div className="section-title text-center center">
                <h2>Trending</h2>
                <hr/>
                <p>Try out our most liked recipes.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><Link to="#" data-filter="*" className="active">All</Link></li>
                                    <li><Link to="#" data-filter=".breakfast">Today</Link></li>
                                    <li><Link to="#" data-filter=".lunch">This week</Link></li>
                                    <li><Link to="#" data-filter=".dinner">this mounth</Link></li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {trendingRecipes.map(recipe =>
                        <div className="col">
                            <Link key={recipe.id} to={`/recipes/?id=${recipe.id}`}>
                                <RecipeOverview recipe={recipe}/>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Trending;