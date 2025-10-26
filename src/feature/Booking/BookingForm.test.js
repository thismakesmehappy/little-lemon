import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import BookingForm from './BookingForm';
import userEvent from "@testing-library/user-event";


const mockDate = new Date(); // Provide a valid mock date
const mockSetDate = jest.fn(); // Mock the setDate callback
const mockAvailableTimes = [{availableTimes: [], selectedTime: 0}];
const guests = 2
const mockSetGuests = jest.fn();
const mockSetOccasion = jest.fn();
const mockOccasions = [];
const mockOccasion = 0
const mockSubmitForm = jest.fn();

test('Renders the BookingForm heading', () => {
    render(<BookingForm
        availableTimes={mockAvailableTimes}
        guests={guests}
        setDate={mockSetDate}
        setGuests={mockSetGuests}
        date={mockDate}
        occasion={mockOccasion}
        setOccasion={mockSetOccasion}
        occasions={mockOccasions}
    />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test("Calls handleSubmit when the form is submitted", async () => {
    // Render the BookingForm
    render(<BookingForm
        availableTimes={mockAvailableTimes}
        guests={guests}
        setDate={mockSetDate}
        setGuests={mockSetGuests}
        date={mockDate}
        occasion={mockOccasion}
        setOccasion={mockSetOccasion}
        occasions={mockOccasions}
        submitForm={mockSubmitForm}
    />);

    let confirmation = screen.queryByText(/Thank you/i);
    expect(confirmation).not.toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();

});



