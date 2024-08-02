// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tseslint from "typescript-eslint"

export default withNuxt(
  // Your custom configs here
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      'vue/no-unused-vars': ['error', {
        'ignorePattern': '^emit'
      }],
    }
  },
)
