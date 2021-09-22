import React, {useEffect, useState} from 'react';
import "./style.css"
import Calendar from "color-calendar";
import Nav from "../../../NavLogged/Nav";
import {Link, useHistory} from "react-router-dom";
import CalendarService from "../../../../Services/CalendarService";

const PlanRecipeComponent = ({match}) => {
    const history = useHistory()
    const recipeId = parseInt(match.params.id)

    const [currentDate, setCurrentDate] = useState(new Date())
    const [partOfTheDay, setPartOfTheDay] = useState("Breakfast")

    const onDateChange = (date, events) => {
        setCurrentDate(date)
    }
    const onSelectChange = (e) => {
        setPartOfTheDay(e.target.value)
    }
    const onSubmit = async () => {
        await CalendarService.planMeal(recipeId, currentDate, partOfTheDay)
        history.push("/tools/calendar")
        window.location.reload()
    }
    useEffect(() => {
        new Calendar({
            id: "#calendar-widget-plan",
            theme: "glass",
            primaryColor: "#f3a281",
            calendarSize: "small",
            eventsData: [],
            dateChanged: (currentDate, events) => {
                onDateChange(currentDate, events)
            }
        })
    }, [])

    return (
        <div id="page-plan-meal">
            <Nav/>
            <div className="container text-center">
                <h1>Plan your meal</h1>
                <select className="form-select form-select-sm mb-3"
                        aria-label=".form-select-lg example"
                        value={partOfTheDay}
                        onChange={(e) => onSelectChange(e)}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>

                <div id="calendar-widget-plan"/>
                <div>
                    <Link to={"/recipes?id=" + recipeId} className="btn-rf-secondary">Back</Link>
                    <button className="btn-rf-primary"
                            onClick={() => onSubmit()}>Plan
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PlanRecipeComponent;