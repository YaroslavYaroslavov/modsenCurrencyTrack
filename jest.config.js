module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass|svg|png)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['./cypress'],
};
