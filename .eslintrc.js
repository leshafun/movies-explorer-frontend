module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
