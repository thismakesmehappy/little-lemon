import {Route, Routes, useNavigate} from 'react-router-dom';
import Homepage from "../Homepage/Homepage.jsx";
import BookingPage from "../Booking/BookingPage.jsx";
import {useReducer} from "react";
import {fetchAPI, submitAPI} from "../../api/api.js";
import ConfirmedBooking from "../Booking/ConfirmedBooking.jsx";

export const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
        const times = fetchAPI(action.date);
        console.log(times);
        return {...state, availableTimes: times}
    }
    if (action.type === "UPDATE_SELECTED_TIME") {
        return {...state, selectedTime: action.selectedTime}
    }
    return state;
}
export const initializeTimes = () => {
    const times = fetchAPI(new Date());
    return {availableTimes: times, selectedTime: 0, date: new Date()};
}

const Main = () => {
    const navigate = useNavigate();

    const availableTimes = useReducer(updateTimes, {}, initializeTimes);

    const submitForm = (e) => {
        if (submitAPI(e)) {
            navigate("/booking/confirmation");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking"
                       element={<BookingPage
                           availableTimes={availableTimes}
                           submitForm={submitForm}
                       />}
                />
                <Route path="/booking/confirmation"
                       element={<ConfirmedBooking />}
                />
            </Routes>

        </main>
    );
};

export default Main
