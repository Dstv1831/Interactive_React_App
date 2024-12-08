export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Correctly resolve the setup file
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Transform JavaScript/JSX files using Babel
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
};
