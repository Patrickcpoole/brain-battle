// @ts-check

import tsEslint from "typescript-eslint";

import configBase from "./eslint.config.base.js";

// (https://typescript-eslint.io/packages/typescript-eslint/#config)
export default tsEslint.config(
  // Set ignores for all rules in this config.
  { ignores: ["**/coverage/**", "**/dist/**", "**/node_modules/**"] },

  // Define configs and rules.
  { extends: configBase },
);
