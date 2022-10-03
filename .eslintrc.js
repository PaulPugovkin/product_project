module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
        }],
        'linebreak-style': ['error', 'windows'],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    }],
};
