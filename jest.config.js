module.exports = {
    ...require('./test/jest-common'),
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
        global: {
          statement: 34,
          branches: 22,
          function: 23,
          lines: 22,
        },
      },
      projects: ['./test/jest.lint.js', './test/jest.server.js', './test/jest.client.js']
}