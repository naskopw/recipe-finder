import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { CategoryOverview } from '../CategoryOverview'
import { Nav } from '../Nav/Nav'
import './style.css'
import { getCategoryByStart } from "../../Services/RecipeService"
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
            <Nav></Nav>
            <div className="section-title text-center center">
                <div className="overlay">
                    <h2>Recipes starting with</h2>
                    <hr />
                    <p>{startsWith}</p>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <input type="search"
                        className="form-control"
                        id="searchKeywordForm"
                        onChange={(e) => {
                            setStartsWith(e.target.value)
                        }}
                        placeholder="Search by keyword" />
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    {
                                        "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
                                            <li key={letter}><Link
                                                className={activeFilter === letter ? 'active' : ''}
                                                onClick={() => { setActiveFilter(letter)
                                                setStartsWith(letter) }}
                                                to={`/categories?startsWith=${letter.toUpperCase()}`}>{letter.toUpperCase()}</Link></li>)
                                    }
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                        <div className="row">
                            {categories &&
                                <div>
                                    {categories.map(category =>
                                        <Link key={category.id} to={`/categories/${category.id}`}>
                                            <CategoryOverview category={category}></CategoryOverview>
                                        </Link>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}