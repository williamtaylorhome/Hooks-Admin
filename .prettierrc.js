// @see: https://prettier.io

module.exports = {
	// Wrap beyond the maximum
	printWidth: 130,
	// Number of indented bytes
	tabWidth: 2,
	// Use tabs instead of space indentation
	useTabs: true,
	// No semicolon at the end (true yes, false no)
	semi: true,
	// Use single quotes (true single and double quotes, false double quotes)
	singleQuote: false,
	// When to change the properties of the referenced object Optional value "<as-needed|consistent|preserve>"
	quoteProps: "as-needed",
	// Put a space "{ foo: bar }" between the object, array parentheses and the text
	bracketSpacing: true,
	// Whenever possible, print trailing commas when multiple lines. (For example, single-line arrays never end with a comma.) ) can be <none|es5|all>, the default value is none
	trailingComma: "none",
	// Use single quotes instead of double quotes in jsx
	jsxSingleQuote: false,
	//  (x) => {} Whether there should be parentheses when the arrow function has only one argument. avoid: omit parentheses, always: do not omit parentheses
	arrowParens: "avoid",
	// If there is already a doclock at the top of the file, this option will create a new line of comments and mark it with @format.
	insertPragma: false,
	// Specify the parser to use, and you don't need to write the @prettier at the beginning of the file
	requirePragma: false,
	// Default value. Because some wrap-sensitive renderers (e.g. GitHub comment) are used, they wrap according to the markdown text style
	proseWrap: "preserve",
	// Whether or not whitespace is sensitive in HTML "css" - respects the default values of CSS display properties, "strict" - spaces are considered sensitive, and "ignore" - spaces are considered insensitive
	htmlWhitespaceSensitivity: "css",
	// Line breaks ending with lf are optional values "<auto|lf|crlf|cr>"
	endOfLine: "auto",
	// These two options can be used to format code that begins and ends with a given character offset, including and not excluding, respectively
	rangeStart: 0,
	rangeEnd: Infinity,
	// The Song of the Dead
	vueIndentScriptAndStyle: false
};
