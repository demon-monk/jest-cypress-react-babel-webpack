module.exports = {
    ...require('./jest.common'),
    testEnvironment: 'jest-environment-jsdom',
    setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
    coverageThreshold: {
        global: {
            statements: 20,
            branches: 6,
            lines: 15,
            functions: 20,
        },
        './src/**/utils.js': {
            statements: 100,
            branches: 80,
            lines: 100,
            functions: 100,
        }
    },
}