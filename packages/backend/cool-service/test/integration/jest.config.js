module.exports = Object.assign({}, require(`@darioblanco/cool-service/jest.config.js`), {
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 75,
      lines: 72,
    },
  },
  setupFiles: ['<rootDir>/test/integration/setup.ts'],
  testMatch: ['**/test/integration/**/*.spec.ts'],
});
