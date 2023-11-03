module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      spread: true,
      restParams: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'align-assignments'],
  rules: {
    'no-unused-vars': 1,
    'no-undef': 2,
    'align-assignments/align-assignments': [
      'warn',
      { require: true, operator: 'always' },
    ],
    'max-len': [
      'warn',
      { code: 120, ignoreComments: true, ignoreStrings: true },
    ],
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'block-scoped-var': 0,
    complexity: 0,
    curly: 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'arrow-body-style': ['warn', 'as-needed'],
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-process-env': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-void': 2,
    'no-warning-comments': [0, { terms: ['todo', 'fixme'], location: 'start' }],
    'no-with': 2,
    radix: 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    yoda: 2,
    strict: 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-use-before-define': 2,
    'brace-style': 1,
    camelcase: 1,
    'comma-spacing': [1, { before: false, after: true }],
    'comma-style': [1, 'last'],
    'consistent-this': [1, '_this'],
    'eol-last': 1,
    'func-names': 0,
    'newline-per-chained-call': 'warn',
    'func-style': 0,
    'key-spacing': [1, { beforeColon: false, afterColon: true }],
    'max-nested-callbacks': [1, 3],
    'new-cap': [1, { newIsCap: true, capIsNew: false }],
    'new-parens': 1,
    'newline-after-var': 0,
    'no-array-constructor': 1,
    'no-inline-comments': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'no-nested-ternary': 1,
    'no-new-object': 1,
    'no-spaced-func': 1,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': 1,
    'one-var': [1, 'never'],
    'operator-assignment': [1, 'never'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    semi: [1, 'always'],
    'semi-spacing': [1, { before: false, after: true }],
    'sort-vars': 0,
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [1, 'never'],
    'space-unary-ops': [1, { words: true, nonwords: false }],
    'wrap-regex': 0,
    'no-var': 2,
    'generator-star-spacing': [1, 'before'],
    'max-depth': [2, 3],
    'max-params': [2, 5],
    'max-statements': 0,
    'no-bitwise': 0,
    // 'no-plusplus': 2,
    'react/display-name': 0,
    'react/jsx-sort-props': 0,
    // 'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'off',
    // 'react/self-closing-comp': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
