const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: ['src/**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
