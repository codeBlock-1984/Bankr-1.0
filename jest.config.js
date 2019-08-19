module.exports = {
  bail: false,
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'UI/src/**/*.{js,jsx}',
    '!UI/src/index.js',
    '!UI/__tests__/Utils',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: '_coverage_',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 75,
      lines: 75,
    },
  },
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFilesAfterEnv: ['./tests.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/UI/__tests__/Utils/makeMockStore.js'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
};
