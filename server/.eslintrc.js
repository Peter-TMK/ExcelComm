module.export = {
  // "root": true,
  env: {
    es2016: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "es2016", sourceType: "module" },
  plugins: ["@typescript-eslint"],
  //   rules: {
  //     "@typescript-eslint/strict-boolean-expressions": [
  //       2,
  //       {
  //         allowString: false,
  //         allowNumber: false,
  //       },
  //     ],
  //   },
  //   ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"],
};
