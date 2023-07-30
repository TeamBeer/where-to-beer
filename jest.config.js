module.exports = {
  testURL: "http://localhost/",
  setupFiles: ["<rootDir>/tests/setup.js", "jest-localstorage-mock"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
