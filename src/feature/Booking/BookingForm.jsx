const BookingForm = ({date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, occasions, times}) => {
    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
            >
                {
                    times.map((timeSlot, index) =>
                        <option
                            key={timeSlot.replace("\:", "")}
                            value={index}
                        >
                            {timeSlot}
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
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;