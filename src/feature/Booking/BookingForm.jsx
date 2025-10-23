import SectionTitle from "../helpers/SectionTitle.jsx";
import Button from "../helpers/Button.jsx";
import {useState} from "react";

const BookingForm = ({date, setDate, availableTimes, guests, setGuests, occasion, setOccasion, occasions}) => {
    const [submitted, setSubmitted] = useState(false);
    const handleDateChange = (e) => {
        const yearMonthDay = e.target.value.split("-");
        const newDate = new Date(
            parseInt(yearMonthDay[0]),
            (yearMonthDay[1] - 1),
            parseInt(yearMonthDay[2]));
        setDate(newDate);
    }

    const parseDate = (date) => {
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    const [times, dispatchTime] = availableTimes;
    return (
        <section className={"booking-form"}>
            <SectionTitle color={"black"}>Book Now</SectionTitle>
            <form style={{display: "grid", gap: "20px"}} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={parseDate(date)}
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time "
                        value={times.selectedTime}
                        onChange={(e) => dispatchTime({type: "UPDATE_SELECTED_TIME", selectedTime: e.target.value})}
                >
                    {
                        times.availableTimes.map((time, index) =>
                            <option
                                key={time.replace("\:", "")}
                                value={index}
                            >
                                {time}
                            </option>
                        )
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                >
                    {occasions.map((occasion, index) =>
                        <option
                            key={occasion.key}
                            value={index}
                        >
                            {occasion.display}
                        </option>)}
                </select>
                <Button className={"on-gray"} role={"submit"}>Make Your reservation </Button>
            </form>
            {submitted && <p className={"text-black"}>Thank you for your reservation!</p>}
        </section>
    );
};

export default BookingForm;