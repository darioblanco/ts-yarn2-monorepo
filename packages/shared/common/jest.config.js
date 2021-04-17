const path = require('path');

const rootDir = path.resolve(__dirname);

module.exports = Object.assign(
  {},
  require(`@darioblanco/monorepo/packages/shared/jest.config.js`),
  {
    rootDir,
    collectCoverageFrom: ['src/**/*.ts'],
    roots: ['<rootDir>/src/', '<rootDir>/test/'],
    testMatch: ['**/test/**/*.spec.ts'],
  },
);
