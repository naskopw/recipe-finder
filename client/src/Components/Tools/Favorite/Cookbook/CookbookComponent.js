import React, {useEffect, useState} from 'react';
import "./style.css"
import {FavoriteService} from "../../../../Services/FavoriteService";
import Nav from "../../../NavLogged/Nav";
import RecipeOverviewCard from "../../../Cards/RecipeOverview/RecipeOverviewCard";
import {Link} from "react-router-dom";

const CookbookComponent = ({match}) => {
    const cookbookId = parseInt(match.params.id);

    const [cookbook, setCookbook] = useState([])

    async function fetchData() {
        setCookbook(await FavoriteService.get(cookbookId))
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function removeFav(recipeId) {
        await FavoriteService.removeRecipe(cookbookId, recipeId)
        await fetchData()

    }

    function renderCookbook() {
        if (cookbook.recipes !== undefined && cookbook.recipes.length > 0) {
            return (
                cookbook.recipes.map(recipe => {
                    return (
                        <div className="col" key={recipe.id}>
                            <button className="btn-rf-primary"
                                    onClick={() => removeFav(recipe.id)}>X
                            </button>
                            <RecipeOverviewCard recipe={recipe}/>
                        </div>
                    )
                }))
        } else {
            return <h1>No recipes added yet</h1>
        }
    }

    return (
        <div id={"page-cookbook"}>
            <Nav/>
            <div className={"rf-header text-center"}>
                <h2>{cookbook.title}</h2>
                <hr/>
            </div>
            <div className="container text-center">
                <Link className="btn-rf-secondary"
                      to={"/cookbook/edit/" + cookbookId}
                >Edit cookbook</Link>
            </div>
            <div className="container text-center">
                <div className="row">
                    {renderCookbook()}
                </div>
            </div>
        </div>
    );
};

export default CookbookComponent;