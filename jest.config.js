module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    snapshotSerializers: ['jest-emotion'],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js'),
    },
    // before jest is loaded
    // testFiles: [],
    // after jest is loaded
    setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),

}