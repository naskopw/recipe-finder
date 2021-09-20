import React, {useEffect, useState} from 'react';
import Nav from "../../NavLogged/Nav";
import {getAll} from "../../../Services/ShoppingService";
import "./style.css"

const ShoppingList = () => {
    const [items, setItems] = useState([])
    const [crossed, setCrossed] = useState([])


    const SIZE_LIMIT = 8
    useEffect(() => {
        async function fetchData() {
            setItems(await getAll())
        }

        fetchData()
    }, [])


    useEffect(() => {
        for (let i = 0; i < crossed.length; i++) {
            const title = document.querySelector(
                `#section-shopping-list > div:nth-child(${crossed[i]}) > div > div:nth-child(1) > h3`)
            title.classList.add("crossed")
        }
    }, [crossed])


    const deleteItem = (itemId) => {
        setItems(items.filter((i) => i["id"] !== itemId))
    }
    const trimTitle = (title) => {
        if (title.length > SIZE_LIMIT) {
            return `${title.slice(0, SIZE_LIMIT)}...`
        } else {
            return title
        }
    }


    const crossItem = (itemId) => {
        if (crossed.includes(itemId)) {
            //already crossed
            setCrossed(crossed.filter(i => i["id"] !== itemId))
        } else {
            crossed.push(itemId)
            setCrossed(crossed)
        }

    }

    return (
        <div>
            <Nav/>
            <section id="section-shopping-list" className="container text-center">
                {
                    items.map((item) =>
                        <div className="shopping-item"
                             key={item["id"]}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3>{trimTitle(item["title"])}</h3>
                                </div>
                                <div className="col-lg-3">
                                    <p>{item["quantity"]}</p>
                                </div>
                                <div className="col-lg-3">
                                    <i className="fas fa-edit"
                                       onClick={() => crossItem(item["id"])}
                                    />
                                    <i className="fas fa-trash-alt"
                                       onClick={() => deleteItem(item["id"])}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    );
};

export default ShoppingList;