import React, {useEffect, useState} from 'react';
import Nav from "../../NavLogged/Nav";
import "./style.css"
import {Link} from "react-router-dom";
import CategoryOverviewCard from "../../Cards/CategoryOverview/CategoryOverviewCard";
import {FavoriteService} from "../../../Services/FavoriteService";

const FavoriteComponent = () => {

    const [categories, setCategories] = useState([])


    async function fetchData() {
        let categories = await FavoriteService.getAll()
        setCategories(categories.reverse())
    }

    useEffect(() => {

        fetchData()
    }, [])

    async function onCreateClick(title) {
        await FavoriteService.createCookbook(title)
        await fetchData()
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
                    <input id="input-create-cookbook" type="text" placeholder="My Cookbook"/>
                    <button className="btn-rf-primary"
                            onClick={() => onCreateClick(
                                document.getElementById("input-create-cookbook").value
                            )}>Create cookbook
                    </button>
                </div>
                <div className="container text-center">

                    <div className={"row"}>
                        {
                            categories.map((cookbook, index) => {
                                return (
                                    <div className={"col"}>
                                        <Link to={"/cookbook/" + cookbook.id}
                                              key={index}
                                        ><CategoryOverviewCard category={{
                                            ...cookbook,
                                            name: cookbook.title
                                        }}
                                        />
                                        </Link>
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