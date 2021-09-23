import React, {useEffect, useState} from 'react';
import Calendar from "color-calendar"
import "color-calendar/dist/css/theme-glass.css"
import Nav from "../../NavLogged/Nav";
import "./style.css"
import {Link} from "react-router-dom";
import CalendarService from "../../../Services/CalendarService";

const CalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    const onDateChange = (date, events) => {
        setCurrentDate(date)
    }
    useEffect(() => {
        new Calendar({
            id: "#calendar-widget",
            theme: "glass",
            primaryColor: "#f3a281",
            calendarSize: "small",
            eventsData: [],
            dateChanged: (currentDate, events) => {
                onDateChange(currentDate, events)
            }
        })
    }, [])

    const [plans, setPlans] = useState([])
    useEffect(() => {
        async function fetchData() {

            setPlans(await CalendarService.getForDay(currentDate))
        }

        fetchData()
    }, [currentDate])

    async function onDeleteClick(itemId) {
        const newPlans = plans.filter(p => p["id"] !== itemId)
        await CalendarService.deletePlan(itemId)
        setPlans(newPlans)
    }

    return (
        <div id="page-calendar">
            <Nav/>
            <div className="grid-container container">
                <div className="row">
                    <div className="col">
                        <div id="calendar-widget"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>My meals for {currentDate.toDateString()}</h1>
                        <table className="table table-bordered">
                            <thead id="meals-table">
                            <tr>
                                <th scope="row">Title</th>
                                <th colSpan="2"> Date</th>
                                <th>Meal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                plans && plans.map((plan, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row"><Link
                                                to={"/recipes/?id=" + plan["recipeId"]}>{plan["name"]}</Link></th>
                                            <td colSpan="2">{new Date(plan["date"]).toDateString()}</td>
                                            <td>{plan["partOfTheDay"]}</td>
                                            <td
                                                onClick={() => onDeleteClick(plan["id"])}><i className="fa fa-trash"/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CalendarComponent;