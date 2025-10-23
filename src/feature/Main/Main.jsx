import {Route, Routes} from 'react-router-dom';
import Homepage from "../Homepage/Homepage.jsx";
import BookingPage from "../Booking/BookingPage.jsx";
import {useReducer} from "react";
import {times} from "../Booking/data/consts.js";

const Main = () => {
    const updateTimes = (state, action) => {
        if (action.type === "UPDATE_TIMES") {
            return {...state, availableTimes: times}
        }
        if (action.type === "UPDATE_SELECTED_TIME") {
            return {...state, selectedTime: action.selectedTime}
        }
    }
    const initializeTimes = () => {
        return {availableTimes: times, selectedTime: 0, date: new Date()};
    }

    const availableTimes = useReducer(updateTimes, {}, initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking"
                       element={<BookingPage availableTimes={availableTimes}
                       />}
                />
            </Routes>

        </main>
    );
};

export default Main
