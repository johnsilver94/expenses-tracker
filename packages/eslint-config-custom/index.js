/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	settings: {
		react: {
			version: 'detect'
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json']
			}
		}
	},
	env: {
		browser: true,
		es2021: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	ignorePatterns: ['node_modules', 'dist', '.next'],
	extends: [
		'turbo',
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	plugins: [
		'import',
		'@typescript-eslint',
		'@typescript-eslint/eslint-plugin',
		'unused-imports',
		'prettier',
		'react',
		'react-hooks'
	],
	rules: {
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'react/react-in-jsx-scope': 0,
		'react/display-name': 0,
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/indent': 0,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'linebreak-style': ['error', 'unix'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_'
			}
		],
		'import/no-unresolved': 'off',
		'import/order': [
			'warn',
			{
				'newlines-between': 'always'
			}
		],
		'no-console': [
			'error',
			{
				allow: ['warn', 'error']
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: ['var', 'const', 'function', 'class'],
				next: ['if', 'while', 'function']
			}
		],
		quotes: ['error', 'single'],
		indent: [
			'error',
			'tab',
			{
				ignoredNodes: ['CallExpression > FunctionExpression.callee > BlockStatement.body'],
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 0,
				MemberExpression: 1,
				FunctionDeclaration: { body: 1, parameters: 2 }
			}
		],
		semi: ['error', 'never'],
		'max-len': [
			'error',
			{
				code: 125,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreUrls: true,
				tabWidth: 2
			}
		]
	}
}
