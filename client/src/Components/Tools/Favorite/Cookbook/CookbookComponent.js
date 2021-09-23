import React, {useEffect, useState} from 'react';
import "./style.css"
import {FavoriteService} from "../../../../Services/FavoriteService";
import Nav from "../../../NavLogged/Nav";
import RecipeOverviewCard from "../../../Cards/RecipeOverview/RecipeOverviewCard";

const CookbookComponent = ({match}) => {
    const categoryId = parseInt(match.params.id);

    const [category, setCategory] = useState([])

    useEffect(() => {
        async function fetchData() {
            let category = await FavoriteService.get(categoryId)
            setCategory(category)
        }

        fetchData()
    }, [])
    return (
        <div id={"page-cookbook"}>
            <Nav/>
            <div className="container">
                <div className="row">
                    {category.recipes &&
                    category.recipes.map(recipe => {
                        return (
                            <div className="col" key={recipe.id}>
                                <RecipeOverviewCard recipe={recipe}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default CookbookComponent;