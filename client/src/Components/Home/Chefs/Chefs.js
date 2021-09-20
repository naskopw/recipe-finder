import React from 'react';
import "./style.css"

const Chefs = () => {
    return (
        <section id="section-chefs" className="text-center">
            <div className="container-fluid">
                <div className="col-md-12 col-md-offset-1 section-title">
                    <h2>Meet the Chefs</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 team">
                    <div className="thumbnail">
                        <div className="team-img"><img src={"/img/team/02.jpg"} alt="..."/></div>
                        <div className="caption">
                            <h3>Atanas Ivanov</h3>
                            <p>Internet Software Technologies, NBU, f98757</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 team">
                    <div className="thumbnail">
                        <div className="team-img"><img src={"/img/team/01.jpg"} alt="..."/></div>
                        <div className="caption">
                            <h3>Philip Yankov</h3>
                            <p>Mentor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chefs;