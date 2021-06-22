
import './style.css'

export const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 ">
                        <div className="about-img"><img src="img/about.jpg" className="img-responsive" alt="" /></div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Recipe Finder</h2>
                            <hr />
                            <p>Discover delicious recipe ideas, food inspiration and meals for the whole family.
            </p>
                            <h3>Cooking well, with love, is an art.</h3>
                            <p>Browse more than 900 unique recipes. <br />
              Short on time? No problem! <br />
              Choose what to cook with the ingredients you already have!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
