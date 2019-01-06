const path = require('path')
module.exports = {
    ...require('./jest.common'),
    testEnvironment: 'jest-environment-node',
    testMatch: ['**/__server_tests__/**/*.js'],
    coverageDirectory: path.join(__dirname, '../coverage/server')
}