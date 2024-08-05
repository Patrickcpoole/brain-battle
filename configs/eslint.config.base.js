// @ts-check

import eslint from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginSecurity from "eslint-plugin-security";
import tsEslint from "typescript-eslint";

// (https://typescript-eslint.io/packages/typescript-eslint/#config)
export default tsEslint.config(
  // Set ignores for all rules in this config.
  { ignores: ["**/node_modules/**"] },

  // Define configs and rules.
  // (https://eslint.org/docs/latest/rules)
  {
    extends: [eslint.configs.recommended],
    rules: {
      "no-useless-computed-key": "error",
      "object-shorthand": "error",
    },
  },
  // (https://typescript-eslint.io/rules)
  {
    extends: tsEslint.configs.recommended,
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  // (https://github.com/jest-community/eslint-plugin-jest#rules)
  {
    extends: [
      pluginJest.configs["flat/style"],
      pluginJest.configs["flat/recommended"],
    ],
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "jest/prefer-jest-mocked": "error",
    },
    settings: { jest: { version: "latest" } },
  },
  // (https://github.com/eslint-community/eslint-plugin-security#rules)
  {
    // @ts-expect-error
    extends: [pluginSecurity.configs.recommended],
    rules: {
      "security/detect-object-injection": "off",
    },
  },
  // (https://eslint-plugin-perfectionist.azat.io/rules)
  {
    extends: [pluginPerfectionist.configs["recommended-natural"]],
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: {
            value: {
              constants: [
                "**/__constants__",
                "**/__constants__/**",
                "**/constants",
                "**/constants/**",
              ],
            },
          },
          groups: [
            ["side-effect", "side-effect-style"],
            ["constants"],
            ["builtin", "external", "internal"],
            ["index", "parent", "sibling"],
            ["builtin-type", "external-type", "internal-type"],
            ["index-type", "parent-type", "sibling-type"],
            ["object", "unknown"],
          ],
          internalPattern: ["@/**"],
          type: "natural",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      "perfectionist/sort-object-types": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      "perfectionist/sort-objects": [
        "error",
        { partitionByNewLine: true, type: "natural" },
      ],
      // This rule is currently buggy; we'll look into re-enabling it later.
      "perfectionist/sort-switch-case": "off",
    },
  },
  // This should be last.
  // (https://github.com/prettier/eslint-plugin-prettier)
  { extends: [pluginPrettierRecommended] },
);
