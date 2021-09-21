import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import AuthService from "../../Services/AuthService";


const LogoutComponent = () => {
    const history = useHistory();
    useEffect(() => {
        AuthService.logout()
        history.push("/")
        window.location.reload()
    }, [])
    return (
        <>

        </>
    );
};

export default LogoutComponent;