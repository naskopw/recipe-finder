import React, {useEffect, useState} from 'react';
import "./style.css"
import {FavoriteService} from "../../../../Services/FavoriteService";
import Nav from "../../../NavLogged/Nav";
import {Link, useHistory} from "react-router-dom";

const EditCookbookComponent = ({match}) => {
    const cookbookId = parseInt(match.params.id);
    const history = useHistory()

    const [cookbook, setCookbook] = useState([])

    async function fetchData() {
        setCookbook(await FavoriteService.get(cookbookId))
    }

    useEffect(() => {
        fetchData()
    }, [])


    async function onSubmit() {
        await FavoriteService.updateCookbook(cookbookId,
            document.getElementById("input-update-cookbook-title").value,
            document.getElementById("input-update-cookbook-image").value)
        history.push("/tools/favorite")
        window.location.reload()
    }

    return (
        <div id={"page-cookbook-edit"}>
            <Nav/>
            <div className="rf-header text-center">
                <h2>Edit cookbook</h2>
                <hr/>
            </div>
            <div className="container text-center">
                <form className="input-form">
                    <p>Title</p>
                    <input type="text"
                           id={"input-update-cookbook-title"}
                           placeholder={cookbook.title}
                    />

                    <p>Image</p>
                    <input type="text"
                           id={"input-update-cookbook-image"}
                           placeholder={cookbook.image}
                    />
                </form>
                <Link className="btn-rf-secondary"
                      to={"/cookbook/" + cookbookId}>Back
                </Link>
                <button className="btn-rf-secondary"
                        onClick={() => {
                            onSubmit()
                        }}>Save
                </button>
            </div>
        </div>
    );
};

export default EditCookbookComponent;