import {Route, Routes} from 'react-router-dom';
import Homepage from "../Homepage/Homepage.jsx";
import BookingPage from "../Booking/BookingPage.jsx";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>

        </main>
    );
};

export default Main
