import js from "@eslint/js";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "coverage/**",
    ],
  },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
