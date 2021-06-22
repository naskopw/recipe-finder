import { Link } from "react-router-dom"
import './style.css'

export const Header = () => {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="intro-text">
                                <h1>RecipeFinder</h1>
                                <p>Find the right recipes for the ingredients you have</p>
                                <Link to={`/#about`}></Link>
                                <a href="#about" className="btn btn-custom btn-lg page-scroll">Discover</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
