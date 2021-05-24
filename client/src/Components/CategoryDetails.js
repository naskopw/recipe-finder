import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { RecipeOverview } from "./RecipeOverview"
import { getCategory } from "../Services/RecipeService"
export const CategoryDetails = () => {
    const categoryId = parseInt(new URLSearchParams(useLocation().search).get('id'))
    const [category, setCategory] = useState()

    useEffect(() => {
        async function fetchData() {
            let category = await getCategory(categoryId)
            setCategory(category)
        }
        fetchData()
    }, [])

    return (
        <div>
            {category &&
                <div>

                    <h1>{category.name}</h1>
                    {category.recipes.map(recipe =>
                        <Link key={recipe.id} to={`/recipes/?id=${recipe.id}`}>
                            <RecipeOverview recipe={recipe}></RecipeOverview>
                        </Link>
                    )}
                </div>
            }
        </div>
    )
}
