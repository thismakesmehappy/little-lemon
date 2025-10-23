import BookingForm from "./BookingForm.jsx";
import Container from "../helpers/Container.jsx";
import {useState} from "react";
import {occasions} from "./data/consts.js";
import PageHead from "../helpers/PageHead.jsx";
import Title from "../helpers/Title.jsx";

const BookingPage = ({availableTimes}) => {
    const [availableOccasions, setAvailableOccasions] = useState(occasions);
    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(0);
    return (
        <section>
            <PageHead>
                <div className="d-flex justify-content-between align-items-center">
                    <Title>Reserve a table</Title>
                    <p className={"h3 mb-0"}>Chicago</p>
                </div>
            </PageHead>
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