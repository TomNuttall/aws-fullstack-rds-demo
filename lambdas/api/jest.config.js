module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
}
