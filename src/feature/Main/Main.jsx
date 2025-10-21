import {Route, Routes} from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/booking" element={<h1>Booking</h1>} />
            </Routes>

        </main>
    );
};

export default Main
