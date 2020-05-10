module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'block' }],
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'block-like' }],
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'export' }],
    }
}
