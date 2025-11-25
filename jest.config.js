export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  moduleFileExtensions: [
    'vue',
    'ts',
    'js',
    'json',
    'node',
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/components/**/*.{vue,ts,js}',
    '!src/components/**/index.ts',
  ],
  coverageReporters: [
    'text',
    'html',
    'lcov',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@vue|vue|vue-router|lodash-es))',
  ],
}
