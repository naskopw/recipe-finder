import React, {useEffect, useState} from 'react';
import Nav from "../../NavLogged/Nav";
import {Link, useHistory} from "react-router-dom";
import {createItem, deleteItem, getAll} from "../../../Services/ShoppingService";

const ShoppingItemEdit = ({match}) => {
    const history = useHistory();
    const itemId = parseInt(match.params.id)
    const [item, setItem] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            let newItems = await getAll()
            setItem(newItems.filter(i => i.id === itemId)[0])
        }

        fetchData()
    }, [])

    async function submit() {
        await deleteItem(itemId)
        await createItem(item.title, item.desc, item.quantity)
        history.push("/tools/shopping")
        window.location.reload()
    }

    return (
        <div className="page-shopping-edit">
            <Nav/>
            <div className="header-box">
                <h2>What are you going to buy?</h2>
                <hr/>
            </div>
            <form className="input-form">
                <p>Title</p>
                <input type="text"
                       placeholder={item ? item.title : ""}
                       onChange={e => setItem({
                           ...item,
                           title: e.target.value
                       })}/>

                <p>Description</p>
                <input type="text"
                       placeholder={item ? item.desc : ""}
                       onChange={e => setItem({
                           ...item,
                           desc: e.target.value
                       })}/>
                <p>Quantity</p>
                <input type="number"
                       min={0}
                       placeholder={item ? item.quantity : 1}
                       onChange={e => setItem({
                           ...item,
                           quantity: parseInt(e.target.value)
                       })}/>
            </form>
            <Link className="btn-rf-secondary"
                  to="/tools/shopping">Back
            </Link>
            <button className="btn-rf-secondary"
                    onClick={() => {
                        submit()
                    }}>Create
            </button>
        </div>
    );
};

export default ShoppingItemEdit;