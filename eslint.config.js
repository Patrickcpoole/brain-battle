// @ts-check

import tsEslint from "typescript-eslint";

import configNode from "./configs/eslint.config.node.js";

// (https://typescript-eslint.io/packages/typescript-eslint/#config)
export default tsEslint.config(
  // Define configs and rules.
  { extends: configNode },
);
