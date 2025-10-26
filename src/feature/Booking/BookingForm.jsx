import SectionTitle from "../helpers/SectionTitle.jsx";
import Button from "../helpers/Button.jsx";
import {useState} from "react";
import FormError from "./FormError.jsx";

export const parseDate = (date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`
}

const BookingForm = ({
                         date,
                         setDate,
                         availableTimes,
                         guests,
                         setGuests,
                         occasion,
                         setOccasion,
                         occasions,
                         submitForm
                     }) => {
    const [errors, setErrors] = useState({})
    const handleDateChange = (e) => {
        const yearMonthDay = e.target.value.split("-");
        const newDate = new Date(
            parseInt(yearMonthDay[0]),
            (yearMonthDay[1] - 1),
            parseInt(yearMonthDay[2]));
        setDate(newDate);
        if (newDate === null || newDate === undefined) {
            setErrors({...errors, date: "Date must be entered"})
        } else if (newDate < new Date()) {
            setErrors({...errors, date: "Date cannot be in the past"})
        } else {
            delete errors.date;
        }
    }

    const handleGuestChange = (e) => {
        const value = e.target.value;
        setGuests(value);
        if (value === "") {
            setErrors({...errors, guests: "Number of guests cannot be empty"})
        } else if (value < 1 || value > 10) {
            setErrors({...errors, guests: "Number of guests must be between 1 and 10"})
        } else {
            delete errors.guests;
        }
    }

    const handleTimeChange = (e) => {
        dispatchTime({type: "UPDATE_SELECTED_TIME", selectedTime: e.target.value})
        if (e.target.value === "") {
            setErrors({...errors, time: "Time cannot be empty"})
        } else {
            delete errors.time;
        }
    }
    const handleOccasionChange = (e) => {
        setOccasion(e.target.value)
        if (e.target.value === "") {
            setErrors({...errors, occasion: "Occasion cannot be empty"})
        } else {
            delete errors.occasion;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
    }

    const [times, dispatchTime] = availableTimes;
    return (
        <section className={"booking-form"}>
            <SectionTitle color={"black"} id="booking-title">Book Now</SectionTitle>
            <form style={{display: "grid", gap: "20px"}} onSubmit={handleSubmit} role="form" aria-labelledby="booking-title">
                <fieldset>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={parseDate(date)}
                        onChange={handleDateChange}
                        className={errors.date && "error"}
                        data-testid={"date-input"}
                    />
                    <FormError error={errors.date} />
                </fieldset>
                <fieldset>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time "
                            required
                            value={times.selectedTime}
                            onChange={handleTimeChange}
                            className={errors.time && "error"}
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
                    <FormError error={errors.time} />
                </fieldset>
                <fieldset>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        required
                        onChange={handleGuestChange}
                        className={errors.guests && "error"}
                        onBlur={handleGuestChange}
                        data-testid={"guests-input"}
                    />
                    <FormError error={errors.guests} />
                </fieldset>
                <fieldset>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                            value={occasion}
                            required
                            onChange={handleOccasionChange}
                            className={errors.occasion && "error"}
                    >
                        {occasions.map((occasion, index) =>
                            <option
                                key={occasion.key}
                                value={index}
                            >
                                {occasion.display}
                            </option>)}
                    </select>
                    <FormError error={errors.occasion} />
                </fieldset>
                <Button className={"on-gray"} type={"submit"} disabled={Object.keys(errors).length > 0
                }>Make Your reservation </Button>
            </form>
        </section>
    );
};

export default BookingForm;