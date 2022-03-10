import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Nav from '../NavMain/Nav'
import './style.css'
import { getCategoryByStart } from "../../Services/CategoryService"
import CategoryOverviewCard from "../Cards/CategoryOverview/CategoryOverviewCard";

export const Search = () => {
    const [startsWith, setStartsWith] = useState('A')
    const [categories, setCategories] = useState([])
    const [activeFilter, setActiveFilter] = useState('a')
    useEffect(() => {
        async function fetchData() {
            let categories = await getCategoryByStart(startsWith ? startsWith : 'A')
            setCategories(categories)
        }

        fetchData()
    }, [startsWith])

    return (
        <div id="search">
            <Nav />
            <div className="rf-header text-center">
                <h2>Recipes starting with</h2>
                <hr />
                <h2>{startsWith.toUpperCase()}</h2>
            </div>
            <div className="container text-center">
                <div className="categories">
                    {
                        "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
                            <Link key={letter}
                                className={activeFilter === letter ? "btn-rf-primary" : "btn-rf-secondary"}
                                onClick={() => {
                                    setActiveFilter(letter)
                                    setStartsWith(letter)
                                }}
                                to={`/categories?startsWith=${letter.toUpperCase()}`}
                            >
                                {letter.toUpperCase()}
                            </Link>
                        )}
                </div>
                <div className="row">
                    <input type="search"
                        className="form-control"
                        id="searchKeywordForm"
                        onChange={(e) => {
                            setStartsWith(e.target.value)
                        }}
                        placeholder="Search by keyword" />
                </div>
            </div>
            {categories &&
                <div className="container">
                    <div className="row">
                        {categories.map(category =>
                            <div className="col"
                                key={category.id}>
                                <Link
                                    key={category.id} to={`/categories/${category.id}`}>
                                    <CategoryOverviewCard category={category} />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}