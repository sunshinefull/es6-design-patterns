module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser:'babel-eslint',
    extends: ['eslint:recommended','plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins:['prettier'],
    'rules': {
        'prettier/prettier': 'error',
        'semi': 0,
        'no-unused-vars': 0,
        'no-fallthrough': 0
    }
};