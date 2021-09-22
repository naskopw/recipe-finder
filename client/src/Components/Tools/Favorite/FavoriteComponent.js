import React from 'react';
import Nav from "../../NavLogged/Nav";
import "./style.css"
import {Link} from "react-router-dom";
import Cookbook from "../../Cards/Cookbook/Cookbook";
import RecipeOverviewCard from "../../Cards/RecipeOverview/RecipeOverviewCard";

const FavoriteComponent = () => {
    return (
        <div id="page-favorites">
            <Nav/>
            <section id="section-favorites">
                <div className="rf-header">
                    <h2>Favorite recipes</h2>
                    <hr/>
                    <p>
                        Create collections containing all your delicious recipes
                    </p>
                </div>
                <div className="container">
                    <div className={"row"}>
                        <div className={"col"}>
                            <RecipeOverviewCard/>
                            <RecipeOverviewCard/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FavoriteComponent;