import {Route, Routes} from 'react-router-dom';
import Homepage from "../Homepage/Homepage.jsx";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<h1>Booking</h1>} />
            </Routes>

        </main>
    );
};

export default Main
