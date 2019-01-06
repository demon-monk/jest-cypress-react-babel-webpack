const path = require('path')

module.exports = {
    rootDir: path.join(__dirname, '..'),
    snapshotSerializers: ['jest-emotion'],
    moduleDirectories: 
        [
            'node_modules', 
            path.join(__dirname, '../src'), 
            'shared',
            __dirname,
        ],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('../test/style-mock.js'),
    },
    // before jest is loaded
    // testFiles: [],
    // after jest is loaded
    
    collectCoverageFrom: ['**/src/**/*.js'],
    
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ]
}