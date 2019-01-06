module.exports = {
    ...require('./test/jest.common'),
    projects: ['./test/jest.client.js', './test/jest.server.js'],
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
        global: {
            statements: 15,
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