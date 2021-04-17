module.exports = Object.assign({}, require(`@darioblanco/monorepo/jest.config.js`), {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'yaml'],
  testURL: 'http://localhost/',
});
