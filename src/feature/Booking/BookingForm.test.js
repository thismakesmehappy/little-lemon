import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const mockDate = new Date(); // Provide a valid mock date
    const mockSetDate = jest.fn(); // Mock the setDate callback
    const mockAvailableTimes = [{availableTimes: [], selectedTime: 0}];
    const guests = 2
    const mockSetGuests = jest.fn();

    render(<BookingForm
        availableTimes={mockAvailableTimes}
        guests={guests}
        setDate={mockSetDate}
        setGuests={mockSetGuests}
        date={mockDate}
        occasion={0}
        setOccasion={() => {
        }}
        occasions={[]}
    />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})