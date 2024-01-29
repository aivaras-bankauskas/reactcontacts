import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' }
};

export default config;
