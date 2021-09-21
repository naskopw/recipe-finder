import {React, useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import RecipeOverview from "../RecipeOverview/RecipeOverview"
import {getCategory} from "../../Services/CategoryService"
import Nav from '../NavMain/Nav'
import "./style.css"

export const CategoryDetails = ({match}) => {
    const categoryId = parseInt(match.params.id)
    const [category, setCategory] = useState()

    useEffect(() => {
        async function fetchData() {
            let category = await getCategory(categoryId)
            setCategory(category)
        }

        fetchData()
    }, [categoryId])

    return (
        <div id="page-category-details">
            <Nav/>
            {category &&
            <div>
                <div className="section-title text-center center"
                     style={{
                         backgroundImage: `url('${decodeURI(category.image).replaceAll("\\", "/")}')`,
                         // backgroundSize: "cover",
                         // marginBottom: "50px"
                     }}
                >
                    <div className="overlay">
                        <h2 style={{color: "white"}}>{category.name}</h2>
                        <hr/>
                    </div>
                </div>
                <div className='container'>
                    {category.recipes.map(recipe =>
                        <Link key={recipe.id} to={`/recipes/?id=${recipe.id}`}>
                            <RecipeOverview recipe={recipe}/>
                        </Link>
                    )}
                </div>
            </div>
            }
        </div>
    )
}
