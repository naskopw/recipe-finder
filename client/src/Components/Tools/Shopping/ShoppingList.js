import React, {useEffect, useState} from 'react';
import Nav from "../../NavLogged/Nav";
import {createItem, deleteItem, getAll} from "../../../Services/ShoppingService";
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
        for (let i = 1; i <= items.length; i++) {
            const title = document.querySelector(
                `#section-shopping-list > div:nth-child(${i}) > div > div:nth-child(1) > h3`)
            if (crossed.includes(i)) {
                title.classList.add("crossed")
            } else {
                title.classList.remove("crossed")
            }
        }
    }, [crossed])


    const deleteItemCallback = async (itemId) => {
        await deleteItem(itemId)
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
            setCrossed(crossed.filter(i => i !== itemId))
        } else {
            let newCrossed = [...crossed]
            newCrossed.push(itemId)
            setCrossed(newCrossed)
        }

    }

    async function addItem(text) {
        await createItem(text)
        setItems(await getAll())

    }

    return (
        <div className="page-shopping-list">
            <Nav/>
            <h1>What are you going to buy?</h1>
            <div className="input-form">
                <input type="text"
                       placeholder="...food"/>
                <button className="btn"
                        onClick={() => {
                            const input = document.querySelector("#root > div > div > div > input[type=text]")
                            addItem(input.value)
                            input.value = ""
                        }}>Create
                </button>
            </div>
            <section id="section-shopping-list">
                {
                    items.map((item, index) =>
                        <div className="shopping-item"
                             key={item["id"]}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <h3
                                        className="unselectable"
                                        onClick={() => crossItem(index + 1)}
                                    >{trimTitle(item["title"])}</h3>
                                </div>
                                <div className="col-lg-3">
                                    <p>{item["quantity"]}</p>
                                </div>
                                <div className="col-lg-3">
                                    <i className="fas fa-edit"/>
                                    <i className="fas fa-trash-alt"
                                       onClick={() => deleteItemCallback(item["id"])}
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