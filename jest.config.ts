import nextJest from 'next/jest';
import type { Config } from 'jest';

const nextJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  verbose: true,
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
  projects: ['<rootDir>/jest.config.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/.swc'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'https://localhost:3000'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@libraries/(.*)$': '<rootDir>/src/libraries/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@auth/(.*)$': '<rootDir>/src/auth/$1',
    '^@registration/(.*)$': '<rootDir>/src/registration/$1'
  }
};

export default nextJestConfig(config);
