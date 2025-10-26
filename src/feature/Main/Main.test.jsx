import {initializeTimes, updateTimes} from "./Main"; // Import the functions to test
import {fetchAPI} from "../../api/api"; // Mock fetchAPI for tests
import "@testing-library/jest-dom";

jest.mock("../../api/api", () => ({
    fetchAPI: jest.fn(), // Mock fetchAPI function
}));

// Test initializeTimes
test("initializeTimes should return availableTimes, selectedTime as 0, and current date", () => {
    // Mock availableTimes for fetchAPI
    const mockAvailableTimes = ["17:00", "17:30", "18:00"];
    fetchAPI.mockReturnValue(mockAvailableTimes);

    // Call initializeTimes
    const result = initializeTimes();

    // Assertions
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date)); // fetchAPI is called with the current Date
    expect(result.availableTimes).toEqual(mockAvailableTimes); // Matches the mocked data
    expect(result.selectedTime).toBe(0); // Default selectedTime is 0
    expect(result.date).toEqual(expect.any(Date)); // Verifies date is a Date object
});

// Test updateTimes for `UPDATE_TIMES`
test("updateTimes should update availableTimes when action type is UPDATE_TIMES", () => {
    const mockAvailableTimes = ["19:00", "19:30"];
    fetchAPI.mockReturnValue(mockAvailableTimes);

    // Mock state and action
    const initialState = {availableTimes: [], selectedTime: 0};
    const action = {roles: "UPDATE_TIMES", date: new Date("2025-10-25")};

    // Call updateTimes
    const result = updateTimes(initialState, action);

    // Assertions
    expect(fetchAPI).toHaveBeenCalledWith(action.date); // Called with the correct date
    expect(result.availableTimes).toEqual(mockAvailableTimes); // Updates availableTimes correctly
    expect(result.selectedTime).toBe(0); // Default selectedTime remains 0
});

// Test updateTimes for `UPDATE_SELECTED_TIME`
test("updateTimes should update selectedTime when action type is UPDATE_SELECTED_TIME", () => {
    const initialState = {availableTimes: ["18:00", "18:30"], selectedTime: 0};
    const action = {roles: "UPDATE_SELECTED_TIME", selectedTime: 1};

    // Call updateTimes
    const result = updateTimes(initialState, action);

    // Assertions
    expect(result.selectedTime).toBe(1); // Verifies selectedTime is updated
    expect(result.availableTimes).toEqual(initialState.availableTimes); // availableTimes remains unchanged
});

// Test updateTimes for invalid action type
test("updateTimes should handle invalid action types gracefully", () => {
    const initialState = {availableTimes: ["18:00", "18:30"], selectedTime: 0};
    const action = {roles: "INVALID_ACTION"};

    // Call updateTimes
    const result = updateTimes(initialState, action);

    // Assertions
    expect(result).toEqual(initialState); // State remains unchanged
});