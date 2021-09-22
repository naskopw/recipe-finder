import React from 'react';
import Nav from "../../NavLogged/Nav";
import "./style.css"
import {Link} from "react-router-dom";
import CategoryOverviewCard from "../../Cards/CategoryOverview/CategoryOverviewCard";

const FavoriteComponent = () => {
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
                    <Link to="#" className="btn-rf-primary">Create cookbook</Link>
                </div>
                <div className="container text-center">

                    <div className={"row"}>
                        <div className={"col"}>
                            <Link to="#"><CategoryOverviewCard/></Link>
                        </div>
                        <div className={"col"}>
                            <Link to="#"><CategoryOverviewCard/></Link>
                        </div>
                        <div className={"col"}>
                            <Link to="#"><CategoryOverviewCard/></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FavoriteComponent;