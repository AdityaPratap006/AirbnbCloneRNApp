module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
