import BookingForm from "./BookingForm.jsx";
import Container from "../helpers/Container.jsx";
import {useState} from "react";
import {occasions, times} from "./data/consts.js";

const BookingPage = () => {
    const [availableTimes, setAvailableTimes, setBooking] = useState(times);
    const [availableOccasions, setAvailableOccasions] = useState(occasions);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(0);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(0);
    return (
        <section>
            <Container>
                <BookingForm
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    guests={guests}
                    setGuests={setGuests}
                    occasion={occasion}
                    setOccasion={setOccasion}
                    occasions={availableOccasions}
                    times={availableTimes}
                />
            </Container>
        </section>
    )
}

export default BookingPage;