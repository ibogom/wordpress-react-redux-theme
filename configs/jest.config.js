
module.exports = {
    verbose: true,
    rootDir: '../',
    moduleFileExtensions: [
        "js",
        "jsx",
        "json"
    ],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/src/js/test/__mocks__/styles.js"
    },
    moduleDirectories: [
        "node_modules",
        "bower_components",
        "shared"
    ],
    collectCoverageFrom: ["src/js/**/*.js"]
};