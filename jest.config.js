/** @type {import('ts-jest/dist/types').TsJestCompileOptions} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // roots: ['<rootDir>/src/__tests__/unitTest'],
    testRegex: '.*\\.test\\.ts$',
};