module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
      }
    ],
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/self-closing-comp": "off"
  }
}