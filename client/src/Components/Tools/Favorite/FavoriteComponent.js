import React, {useEffect, useState} from 'react';
import Nav from "../../NavLogged/Nav";
import "./style.css"
import {Link} from "react-router-dom";
import CategoryOverviewCard from "../../Cards/CategoryOverview/CategoryOverviewCard";
import {FavoriteService} from "../../../Services/FavoriteService";
import {getCategory} from "../../../Services/CategoryService";

const FavoriteComponent = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchData() {
            let categories = await FavoriteService.getAll()
            setCategories(categories)
        }

        fetchData()
    }, [])

    async function onCreateClick() {
        let data = await FavoriteService.getAll()
        setCategories(data)
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
                        Create collections containing all your delicious recipes
                    </p>
                </header>
                <div className="cookbook-add-container">
                    <input type="text" placeholder="My Cookbook"/>
                    <button className="btn-rf-primary"
                            onClick={() => onCreateClick()}>Create cookbook
                    </button>
                </div>
                <div className="container text-center">

                    <div className={"row"}>
                        {
                            categories.map((category, index) => {
                                return (
                                    <div className={"col"}>
                                        <Link to={"/cookbook/" + category.id}
                                              key={index}
                                        ><CategoryOverviewCard category={{
                                            ...category,
                                            name: category.title
                                        }}
                                        />
                                        </Link>)
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

export default FavoriteComponent;