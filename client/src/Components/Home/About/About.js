import React from 'react';
import "./style.css"

const About = () => {
    return (
        <section id="section-about" className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={"/img/about.jpg"} className="img-fluid" alt=""/>
                </div>
                <article className="col-lg-6">
                    <h2>Recipe Finder</h2>
                    <hr/>
                    <p>
                        Discover delicious recipe ideas, food inspiration and meals for
                        the whole family.
                    </p>
                    <h3>Cooking well, with love, is an art.</h3>
                    <p>
                        Browse more than 900 unique recipes. <br/>
                        Short on time? No problem! <br/>
                        Choose what to cook with the ingredients you already have!
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;