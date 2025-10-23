import BookingForm from "./BookingForm.jsx";
import Container from "../helpers/Container.jsx";
import {useState} from "react";
import {occasions} from "./data/consts.js";

const BookingPage = ({availableTimes}) => {
    const [availableOccasions, setAvailableOccasions] = useState(occasions);
    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(0);
    return (
        <section>
            <Container>
                <BookingForm
                    date={date}
                    setDate={setDate}
                    guests={guests}
                    setGuests={setGuests}
                    occasion={occasion}
                    setOccasion={setOccasion}
                    occasions={availableOccasions}
                    availableTimes={availableTimes}
                />
            </Container>
        </section>
    )
}

export default BookingPage;