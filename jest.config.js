module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    snapshotSerializers: ['jest-emotion'],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js'),
    }
}