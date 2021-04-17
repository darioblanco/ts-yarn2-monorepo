const path = require('path');

const rootDir = path.resolve(__dirname);

module.exports = Object.assign({}, require('@darioblanco/monorepo/jest.config.js'), {
  rootDir,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      statements: 99.6,
      branches: 93.26,
      functions: 96,
      lines: 99.6,
    },
  },
});
