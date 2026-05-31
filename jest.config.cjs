module.exports = {
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.mjs"],
  transform: {
    "^.+\\.mjs$": "babel-jest",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
}
