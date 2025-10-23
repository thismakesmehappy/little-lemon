export default {
    testEnvironment: "jsdom", // Simulate browser environment
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest", // Use babel-jest for JavaScript and JSX transformation
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS modules
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock static assets
    },
};