import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./style.css"
import RecipeOverview from "../../RecipeOverview/RecipeOverview";
import {getTrending} from "../../../Services/RecipeService";
import RecipeOverviewCard from "../../Cards/RecipeOverview/RecipeOverviewCard";

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
            <div className="rf-header text-center">
                <h2>Trending</h2>
                <hr/>
                <p>Try out our most liked recipes.</p>
            </div>
            <div className="container">

                <div className="row">
                    {trendingRecipes.map(recipe =>
                        <div className="col">
                            <Link key={recipe.id} to={`/recipes/?id=${recipe.id}`}>
                                <RecipeOverviewCard recipe={recipe}/>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Trending;