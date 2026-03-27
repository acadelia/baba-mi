import { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'projects/**/*.ts',
    '!src/**/*.module.ts',
    '!projects/**/*.module.ts',
    '!**/*module.ts',
    '!**/*.spec.ts',
    '!src/main.ts',
    '!**/jest.config.ts',
  ],
  coverageDirectory: './coverage',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage',
      },
    ],
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'module\\.ts$'],
  coverageReporters: ['html', 'text-summary', 'lcov'],
  testMatch: ['**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|@angular|@stencil|rxjs|tslib|zone\\.js)'],
  transform: {
    '^.+\\.(ts|mts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
  },
};

export default config;
