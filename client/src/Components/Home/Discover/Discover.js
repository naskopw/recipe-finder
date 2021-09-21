import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

function Discover() {
    return (
        <section id="section-discover">
            <h1>RecipeFinder</h1>
            <p>Find the right recipes for the ingredients you have</p>
            <Link className="btn-rf-primary" to="#about">Discover</Link>
        </section>

    );
}

export default Discover;