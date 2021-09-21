import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import AuthService from "../../Services/AuthService";
import Nav from "../NavLogged/Nav"
import "./style.css"

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {username: ""}
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {currentUser} = this.state;

        return (
            <div>
                <Nav isStatic={true}/>
                <div id="contact" className="text-center">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Profile</h2>
                            <hr/>
                        </div>
                        <div className="container">
                            {(this.state.userReady) ?
                                <div>
                                    <header className="jumbotron">
                                        <h3>
                                            <strong>{currentUser.username}</strong>
                                        </h3>
                                        <img
                                            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                            style={{width: "8rem", height: "8rem"}} alt="..."/>
                                    </header>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        {currentUser.email}
                                    </p>
                                    <strong>Authorities:</strong>
                                    <ul>
                                        {currentUser.roles &&
                                        currentUser.roles.map((role, index) => <li
                                            key={index}>{role.replace("ROLE_", "")}</li>)}
                                    </ul>
                                </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}