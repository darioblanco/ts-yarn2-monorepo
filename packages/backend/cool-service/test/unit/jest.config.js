module.exports = Object.assign({}, require(`@darioblanco/cool-service/jest.config.js`), {
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 75,
      lines: 50,
    },
  },
  setupFiles: ['<rootDir>/test/unit/setup.ts'],
  testMatch: ['**/test/unit/**/*.spec.ts'],
});
