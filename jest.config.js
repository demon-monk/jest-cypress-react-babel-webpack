const path = require('path')

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    snapshotSerializers: ['jest-emotion'],
    moduleDirectories: 
        [
            'node_modules', 
            path.join(__dirname, 'src'), 
            'shared',
            path.join(__dirname, 'test'),
        ],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js'),
    },
    // before jest is loaded
    // testFiles: [],
    // after jest is loaded
    setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
        global: {
            statements: 20,
            branches: 6,
            lines: 20,
            functions: 20,
        },
        './src/**/utils.js': {
            statements: 100,
            branches: 80,
            lines: 100,
            functions: 100,
        }
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ]
}