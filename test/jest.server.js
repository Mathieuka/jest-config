const path = require('path')

module.exports = {
    ...require('./jest-common'),
    coverageDirectory: path.join(__dirname, '../coverage/server'),
    testEnvironment: 'jest-environment-node', // <== important part here
    testMatch: ['**/__server_tests__/*.js']
}