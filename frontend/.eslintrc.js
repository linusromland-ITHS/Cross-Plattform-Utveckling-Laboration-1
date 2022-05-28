module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:tailwindcss/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        tailwindcss: {
            officialSorting: true,
        },
    },
    rules: {
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
};
