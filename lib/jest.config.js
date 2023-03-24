const { getJestMapper } = require('@pandazy/path-alias/dist/path-mapping');
const { defaults } = require('ts-jest/presets');
const { default: uniq } = require('./uniq');

module.exports = {
  ...defaults,
  verbose: true,
  preset: 'ts-jest',
  roots: ['src'],
  transform: {
    ...(defaults?.transform ?? {}),
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '^.+\\.spec\\.tsx?$',
  moduleFileExtensions: uniq([
    ...(defaults.moduleFileExtensions ?? []),
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ]),
  testEnvironment: 'node',
  moduleNameMapper: getJestMapper(),
};
