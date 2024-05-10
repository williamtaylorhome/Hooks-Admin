// @see: https://eslint.org

module.exports = {
	settings: {
		react: {
			version: "detect"
		}
	},
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	/* Specifies how the syntax is parsed*/
	parser: "@typescript-eslint/parser",
	/* Syntax parsing configurations that take precedence below parse*/
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
	/* Inherit some of the rules that already exist*/
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:prettier/recommended"
	],
	/*
	 * "off" or 0 ==> closes the rule
	 * "warn" or 1 ==> opens the rule as a warning (does not affect code execution)
	 * "error" or 2 ==> rule as an error (code cannot be executed, UI error)
	 */
	rules: {
		// eslint (https://eslint.org/docs/latest/rules)
		"no-var": "error", // Require the use of let or const instead of var
		"no-multiple-empty-lines": ["error", { max: 1 }], // Multiple blank lines are not allowed
		"no-use-before-define": "off", // It is forbidden to use functions/classes/variables before they are defined
		"prefer-const": "off", // This rule is designed to flag variables that are declared using the let keyword but never reassigned after the initial assignment, requiring the use of const
		"no-irregular-whitespace": "off", // Irregular blank spaces are prohibited

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": "error", // It is forbidden to define unused variables
		"@typescript-eslint/no-inferrable-types": "off", // Explicit types that can be easily inferred can add unnecessary verbosity
		"@typescript-eslint/no-namespace": "off", // The use of custom TypeScript modules and namespaces is prohibited.
		"@typescript-eslint/no-explicit-any": "off", // The use of any type is prohibited
		"@typescript-eslint/ban-ts-ignore": "off", // The use of @ts-ignore is prohibited
		"@typescript-eslint/ban-types": "off", // Specific types are prohibited
		"@typescript-eslint/explicit-function-return-type": "off", // Explicit type declarations are not allowed for variables or parameters that are initialized as numbers, strings, or booleans
		"@typescript-eslint/no-var-requires": "off", // Not allowed in import statement require statement
		"@typescript-eslint/no-empty-function": "off", // Null functions are prohibited
		"@typescript-eslint/no-use-before-define": "off", // It is forbidden to use them before the variables are defined
		"@typescript-eslint/ban-ts-comment": "off", // It is forbidden @ts<directive> - the use of notes or the requirement of a description after the instruction
		"@typescript-eslint/no-non-null-assertion": "off", // Non-null assertions with suffix operators are not allowed (!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // Explicit returns and parameter types that require the export of public class methods for functions and classes

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		"react-hooks/rules-of-hooks": "off",
		"react-hooks/exhaustive-deps": "off"
	}
};
