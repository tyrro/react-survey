const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
