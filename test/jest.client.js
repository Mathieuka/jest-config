module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom', // <== important part here
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  coverageThreshold: {
    global: {
      statement: 34,
      branches: 22,
      function: 23,
      lines: 22,
    },
  },
}
