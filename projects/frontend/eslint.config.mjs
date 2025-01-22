import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import _import from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:jsx-a11y/recommended',
			'plugin:import/recommended',
			'plugin:import/typescript'
		)
	),
	{
		plugins: {
			'react': fixupPluginRules(react),
			'react-hooks': fixupPluginRules(reactHooks),
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			'jsx-a11y': fixupPluginRules(jsxA11Y),
			'import': fixupPluginRules(_import)
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest
			},

			parser: tsParser,
			ecmaVersion: 2021,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		settings: {
			'react': {
				version: 'detect'
			},

			'import/resolvers': [
				createTypeScriptImportResolver({
					alwaysTryTypes: true,
					project: './tsconfig.json'
				})
			]
		},

		rules: {
			'indent': [
				'error',
				'tab',
				{
					SwitchCase: 1, // Отступ для case в switch
					VariableDeclarator: 1, // Отступ для объявления переменных
					outerIIFEBody: 1, // Отступ для IIFE (Immediately Invoked Function Expression)
					MemberExpression: 1, // Отступ для цепочек вызовов (например, obj.prop)
					FunctionDeclaration: {
						parameters: 1, // Отступ для параметров функции
						body: 1 // Отступ для тела функции
					},
					FunctionExpression: {
						parameters: 1,
						body: 1
					},
					CallExpression: {
						arguments: 1 // Отступ для аргументов вызова функции
					},
					ArrayExpression: 1, // Отступ для элементов массива
					ObjectExpression: 1, // Отступ для свойств объекта
					ImportDeclaration: 1, // Отступ для импортов
					flatTernaryExpressions: false, // Не использовать плоские тернарные выражения
					ignoreComments: false // Не игнорировать отступы в комментариях
				}
			],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react/jsx-closing-bracket-location': ['error', 'tag-aligned'], // Настройка для закрывающего тега
			'react/jsx-wrap-multilines': [
				'error',
				{
					declaration: 'parens-new-line',
					assignment: 'parens-new-line',
					return: 'parens-new-line',
					arrow: 'parens-new-line',
					condition: 'parens-new-line',
					logical: 'parens-new-line',
					prop: 'parens-new-line'
				}
			],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'], // Первый пропс на новой строке, если пропсов больше одного
			'react/jsx-max-props-per-line': [
				'error',
				{
					maximum: 1, // Максимум один пропс на строку
					when: 'multiline' // Только если JSX занимает несколько строк
				}
			],
			'jsx-a11y/no-autofocus': 'off',
			'import/no-unresolved': 'off',
			'import/named': 'error',
			'import/namespace': 'error',
			'import/default': 'error',
			'import/export': 'error',

			'import/order': [
				'error',
				{
					'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',

					'alphabetize': {
						order: 'asc',
						caseInsensitive: true
					}
				}
			],
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-alert': 'error',
			'no-var': 'error',
			'no-unused-expressions': 'error',

			'no-restricted-syntax': [
				'error',
				{
					selector:
						'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
					message: 'Unexpected property on console object was called'
				}
			],

			'curly': 'error',
			'eqeqeq': ['error', 'always'],
			'default-case': 'error',
			'dot-notation': 'error',
			'no-else-return': 'error',
			'no-empty-function': 'error',
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-invalid-this': 'error',
			'no-lone-blocks': 'error',
			'no-multi-spaces': 'error',
			'no-new': 'error',
			'no-return-assign': 'error',
			'no-return-await': 'error',
			'no-self-compare': 'error',
			'no-sequences': 'error',
			'no-throw-literal': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-useless-call': 'error',
			'no-useless-concat': 'error',
			'no-useless-return': 'error',
			'no-void': 'error',
			'no-with': 'error',
			'prefer-promise-reject-errors': 'error',
			'require-await': 'error',
			'vars-on-top': 'error',
			'wrap-iife': ['error', 'inside'],
			'yoda': 'error',
			'strict': ['error', 'global'],
			'no-shadow': 'error',
			'no-undef-init': 'error',
			'no-use-before-define': 'error',
			'array-bracket-spacing': ['error', 'never'],
			'block-spacing': ['error', 'always'],

			'brace-style': [
				'error',
				'1tbs',
				{
					allowSingleLine: true
				}
			],

			'camelcase': 'error',
			'comma-dangle': ['error', 'never'],

			'comma-spacing': [
				'error',
				{
					before: false,
					after: true
				}
			],

			'comma-style': ['error', 'last'],
			'computed-property-spacing': ['error', 'never'],
			'eol-last': ['error', 'always'],
			'func-call-spacing': ['error', 'never'],

			'key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true
				}
			],

			'keyword-spacing': [
				'error',
				{
					before: true,
					after: true
				}
			],

			'linebreak-style': ['error', 'unix'],
			'max-depth': ['error', 4],
			'max-lines': ['error', 500],
			'max-nested-callbacks': ['error', 3],
			'max-params': ['error', 5],

			'max-statements-per-line': [
				'error',
				{
					max: 1
				}
			],

			'new-cap': [
				'error',
				{
					newIsCap: true,
					capIsNew: false
				}
			],

			'new-parens': 'error',
			'no-array-constructor': 'error',
			'no-bitwise': 'error',
			'no-lonely-if': 'error',
			'no-mixed-operators': 'error',
			'no-multi-assign': 'error',

			'no-multiple-empty-lines': [
				'error',
				{
					max: 1
				}
			],

			'no-new-object': 'error',
			'no-tabs': 'off',
			'no-trailing-spaces': 'error',
			'no-unneeded-ternary': 'error',
			'no-whitespace-before-property': 'error',
			'nonblock-statement-body-position': ['error', 'below'],

			'object-curly-newline': [
				'error',
				{
					consistent: true
				}
			],

			'object-curly-spacing': ['error', 'always'],

			'object-property-newline': [
				'error',
				{
					allowAllPropertiesOnSameLine: true
				}
			],

			'one-var': ['error', 'never'],
			'operator-assignment': ['error', 'always'],
			'operator-linebreak': ['error', 'before'],
			'padded-blocks': ['error', 'never'],
			'quote-props': ['error', 'consistent-as-needed'],

			'quotes': [
				'error',
				'single',
				{
					avoidEscape: true
				}
			],

			'semi': ['error', 'always'],

			'semi-spacing': [
				'error',
				{
					before: false,
					after: true
				}
			],

			'space-before-blocks': ['error', 'always'],

			'space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always'
				}
			],

			'space-in-parens': ['error', 'never'],
			'space-infix-ops': 'error',

			'space-unary-ops': [
				'error',
				{
					words: true,
					nonwords: false
				}
			],

			'spaced-comment': ['error', 'always'],

			'switch-colon-spacing': [
				'error',
				{
					after: true,
					before: false
				}
			],

			'template-tag-spacing': ['error', 'never'],
			'unicode-bom': ['error', 'never'],
			'arrow-body-style': ['error', 'as-needed'],
			'arrow-parens': ['error', 'always'],

			'arrow-spacing': [
				'error',
				{
					before: true,
					after: true
				}
			],

			'generator-star-spacing': [
				'error',
				{
					before: true,
					after: false
				}
			],

			'no-confusing-arrow': [
				'error',
				{
					allowParens: true
				}
			],

			'no-duplicate-imports': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'object-shorthand': ['error', 'always'],
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',

			'prefer-destructuring': [
				'error',
				{
					array: true,
					object: true
				}
			],

			'prefer-numeric-literals': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'rest-spread-spacing': ['error', 'never'],

			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true
				}
			],

			'symbol-description': 'error',
			'template-curly-spacing': ['error', 'never'],

			'yield-star-spacing': [
				'error',
				{
					before: false,
					after: true
				}
			]
		}
	}
];
