import React, {useEffect, useState} from 'react';
import "./style.css"
import Calendar from "color-calendar";
import Nav from "../../../NavLogged/Nav";

const PlanRecipeComponent = ({match}) => {
    const recipeId = parseInt(match.params.id)

    const [currentDate, setCurrentDate] = useState(new Date())

    const onDateChange = (date, events) => {
        setCurrentDate(date)
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
                <select className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        defaultValue={true}>
                    <option value="1">Breakfast</option>
                    <option value="2">Lunch</option>
                    <option value="3">Dinner</option>
                </select>

                <div id="calendar-widget-plan"/>
                <div>
                    <button className="btn-rf-secondary">Back</button>
                    <button className="btn-rf-primary">Plan</button>
                </div>
            </div>

        </div>
    );
};

export default PlanRecipeComponent;