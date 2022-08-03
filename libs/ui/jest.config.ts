module.exports = {
  displayName: 'ui',
  testEnvironment: 'jsdom',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/../../jest/svgTransform.js',
  },
  moduleNameMapper: {
    '\\.(css|scss|less|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
