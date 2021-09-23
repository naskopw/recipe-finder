import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";

const RecipeOverviewCard = ({recipe}) => {
    return (
        <div className="container">
            <div className="recipe-overview-card">
                <img src={recipe.image} alt="..."
                     className="img-responsive"/>
                <div className="container-text">

                    <h2>{recipe.title}</h2>
                    <div className="container__text__star">
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                    </div>
                    <p>
                        If you're fan of caramel cake, then you'll love our Caramel Cake Pancakes. We Complete these
                        over-the-top pancakes with Caramel Syrup.
                    </p>
                    <section className={"section-card-bottom"}>
                        <div className="card-timing-container">
                            {recipe.time &&
                            <div className={"card-timing-container-inner"}>
                                <h2>Time</h2>
                                <p>{recipe.time}</p>
                            </div>
                            }
                            <div className="card-timing-container-inner">
                                <h2>Servings</h2>
                                <p>{recipe.servings}</p>
                            </div>
                        </div>
                        <Link className="btn-rf-primary"
                              to={"/recipes?id=" + recipe.id}>View recipe</Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RecipeOverviewCard;
