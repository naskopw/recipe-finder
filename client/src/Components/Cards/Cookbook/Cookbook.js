import React from 'react';
import "./style.css"

const Cookbook = () => {
    return (
        <div className="cookbook">
            <div className="container">
                <div className="container__info">
                    <span><i className="fas fa-eye"/>2350</span>
                    <span><i className="fas fa-comment-alt"/>624</span>
                    <span><i className="fas fa-download"/>1470</span>
                </div>
                <di className="container__profile">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="people"
                    />
                    <div className="container__profile__text">
                        <h2>White Mountains</h2>
                        <p>by <b>Joseph Therrien</b></p>
                    </div>
                </di>
            </div>
        </div>
    );
};

export default Cookbook;