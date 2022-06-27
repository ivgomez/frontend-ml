/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@api(.*)$": "<rootDir>/services/api.ts",
    "^@ui(.*)$": "<rootDir>/ui$1",
    "^@components(.*)$": "<rootDir>/components$1",
    "^@theme(.*)$": "<rootDir>/lib/theme.ts",
    "^@utils(.*)$": "<rootDir>/lib/utils$1",
    "^@static(.*)$": "<rootDir>/public/static/images",
  },
  setupFiles: ["<rootDir>/jest.setup.ts"],
};
