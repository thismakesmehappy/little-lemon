export default {
    presets: [
        ["@babel/preset-env", {targets: {node: "current"}}], // Modern JavaScript transformation
        ["@babel/preset-react", {runtime: "automatic"}], // Automatic JSX runtime enabled
    ],
};