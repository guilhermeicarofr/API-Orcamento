module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    "semi-spacing": ["error", { before: false, after: true }],
    "object-curly-spacing": ["error", "always"],
    "key-spacing": ["error", { beforeColon: false }],
    "padded-blocks": ["error", "never"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-before-blocks": ["error", "always"],
    "eol-last": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": "warn",
  }
};
