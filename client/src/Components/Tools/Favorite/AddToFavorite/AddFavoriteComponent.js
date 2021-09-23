import React, {useEffect, useState} from 'react';
import "./style.css"
import {FavoriteService} from "../../../../Services/FavoriteService";
import Nav from "../../../NavLogged/Nav";
import CategoryOverviewCard from "../../../Cards/CategoryOverview/CategoryOverviewCard";
import {useHistory} from "react-router-dom";

const AddFavoriteComponent = ({match}) => {
    const history = useHistory()
    const recipeId = parseInt(match.params.id)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchData() {
            let categories = await FavoriteService.getAll()
            setCategories(categories)
        }

        fetchData()
    }, [])


    async function onSubmit(categoryId) {
        await FavoriteService.addRecipe(categoryId, recipeId)
        history.push(`/cookbook/` + categoryId)
        window.location.reload()
    }

    return (
        <div id="page-favorites">
            <Nav/>
            <section id="section-favorites"
                     className="text-center">
                <header className="rf-header">
                    <h2>Favorite recipes</h2>
                    <hr/>
                    <p>
                        Choose a cookbook
                    </p>
                </header>
                <div className="container text-center">

                    <div className={"row"}>
                        {
                            categories.map((category, index) => {
                                return (
                                    <div className={"col"}>
                                        <button
                                            key={index}
                                            onClick={() => onSubmit(category.id)}
                                        ><CategoryOverviewCard category={{
                                            ...category,
                                            name: category.title
                                        }}
                                        />
                                        </button>
                                        )
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddFavoriteComponent;