module.exports = {
  bail: false,
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'UI/src/**/*.{js,jsx}',
    '!UI/src/index.js',
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
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -10,
    },
  },
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFilesAfterEnv: ['./tests.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
};
