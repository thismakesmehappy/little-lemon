import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import BookingForm, {parseDate} from './BookingForm';
import userEvent from "@testing-library/user-event";

const mockDate = new Date(); // Provide a valid mock date
const mockSetDate = jest.fn(); // Mock the setDate callback
const mockDispatchTime = jest.fn();
const mockAvailableTimes = [{availableTimes: ["17:00", "18:00"], selectedTime: 0}, mockDispatchTime];
const guests = 2
const mockSetGuests = jest.fn();
const mockSetOccasion = jest.fn();
const mockOccasions = [{key: "birthday", display: "Birthday"}];
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

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();

});

test("Form has valid guests", async () => {
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

    const guestInput = screen.getByTestId("guests-input");
    await fireEvent.change(guestInput, {target: {value: 5}});
    const rangeError = screen.queryByText(/Number of guests must be/i);
    expect(rangeError).not.toBeInTheDocument();
    const emptyError = screen.queryByText(/empty/i);
    expect(emptyError).not.toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();
})

test("Form has negative guests", async () => {
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

    const guestInput = screen.getByTestId("guests-input");
    await fireEvent.change(guestInput, {target: {value: -1}});
    const errorMessage = screen.queryByText(/Number of guests must be/i);
    expect(errorMessage).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
})

test("Form has zero guests", async () => {
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

    const guestInput = screen.getByTestId("guests-input");
    await fireEvent.change(guestInput, {target: {value: 0}});
    const errorMessage = screen.queryByText(/Number of guests must be/i);
    expect(errorMessage).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
})

test("Form has too many guests", async () => {
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

    const guestInput = screen.getByTestId("guests-input");
    await fireEvent.change(guestInput, {target: {value: 11}});
    const errorMessage = screen.queryByText(/Number of guests must be/i);
    expect(errorMessage).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
})

test("Form has empty guests", async () => {
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

    const guestInput = screen.getByTestId("guests-input");
    await fireEvent.change(guestInput, {target: {value: ""}});
    const errorMessage = screen.queryByText(/empty/i);
    expect(errorMessage).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
})

test("Form has today's date", async () => {
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

    const dateInput = screen.getByTestId("date-input");
    const today = new Date();
    await fireEvent.change(dateInput, {target: {value: parseDate(today)}});
    const rangeError = screen.queryByText(/past/i);
    expect(rangeError).not.toBeInTheDocument();
    const emptyError = screen.queryByText(/Date must/i);
    expect(emptyError).not.toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();
})

test("Form has future date", async () => {
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

    const dateInput = screen.getByTestId("date-input");
    const nextWeek = new Date(new Date + 7 * 24 * 60 * 60 * 1000);
    await fireEvent.change(dateInput, {target: {value: parseDate(nextWeek)}});
    const rangeError = screen.queryByText(/past/i);
    expect(rangeError).not.toBeInTheDocument();
    const emptyError = screen.queryByText(/Date must/i);
    expect(emptyError).not.toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();
})

test("Form has past date", async () => {
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

    const dateInput = screen.getByTestId("date-input");
    const lastWeek = new Date(new Date - 7 * 24 * 60 * 60 * 1000);
    await fireEvent.change(dateInput, {target: {value: parseDate(lastWeek)}});
    const rangeError = screen.queryByText(/past/i);
    expect(rangeError).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
})



