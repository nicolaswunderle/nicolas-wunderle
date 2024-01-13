module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-mixed-spaces-and-tabs": "off",
  },
  settings: {
    react: {
      pragma: "h",
      version: "18.0",
    },
  },

  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.jsx"],
      plugins: ["react"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      extends: ["eslint:recommended", "plugin:react/recommended"],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
    },
  ],
};
