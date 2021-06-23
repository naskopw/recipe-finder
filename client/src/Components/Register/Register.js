import { Nav } from "../Nav/Nav"
import './style.css'

export const Register = () => {
    return (
        <div>
            <Nav isStatic={true}></Nav>
            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Register</h2>
                        <hr />
                        <p>Join us and discover the best recipes from the most popular online sources</p>
                    </div>
                    <div className="col-md-10 col-md-offset-1">
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" id="password" className="form-control" placeholder="Password" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" id="passwordRepeat" className="form-control" placeholder="Repeat password" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-custom btn-lg">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
