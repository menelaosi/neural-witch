module.exports = {
	extends: [
		'xo',
		'xo-react',
		'xo-nextjs',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'object-curly-spacing': ['error', 'always'],
	},
};
