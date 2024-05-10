// @see: https://stylelint.io

module.exports = {
	extends: [
		"stylelint-config-standard", // Configure the StyleLint extension
		"stylelint-config-prettier", // arrangement stylelint and prettier compatible
		"stylelint-config-recess-order" // arrangement stylelint css Property writing order plugin,
	],
	plugins: ["stylelint-less"], // arrangement stylelint less Extensions
	rules: {
		indentation: null, // Specify the indent of spaces
		"no-descending-specificity": null, // Disables selectors with lower priorities that are overridden by selectors that have a higher priority
		"function-url-quotes": "always", // Require or disallow quotation marks for URLs "always(Must be in quotation marks)" | never (no quotes)"
		"string-quotes": "double", // Specifies that the string uses single or double quotes
		"unit-case": null, // Specify the case of the unit "lower(Full lower)"|" upper(All upper)"
		"color-hex-case": "lower", // Specify the case of the hexadecimal color "lower(Full lower)"|" upper(All upper)"
		"color-hex-length": "long", // Specifies the abbreviation or expansion of the hexadecimal color "short(Abbreviation for hexadecimal)"|" long(Hexadecimal expansion)"
		"rule-empty-line-before": "never", // Require or prohibit blank lines before the rule "always" | never (there must be no blank lines before the rule)"|" always-multi-line (there must always be a blank line before a multi-line rule) | never-multi-line (There must never be a blank line before a multi-line rule.) )"
		"font-family-no-missing-generic-family-keyword": null, // It is forbidden to miss generic family keywords in the list of family names
		"block-opening-brace-space-before": "always", // Requires that the block must be preceded by a space or no whitespace "always before the curly braces" | never (no space before the opening braces) | always-single-line (must always have a space before the opening curly brace in a single-line block) "|" never-single-line (never have a space before the opening curly brace in a single-line block) "|" always-multi-line (in multi-line blocks, there must always be a space before the opening curly brace) "|" never-multi-line (there must be no space before the opening curly brace in a multi-line block)"
		"property-no-unknown": null, // Unknown attributes are forbidden (true is not allowed)
		"no-empty-source": null, // Empty source code is prohibited
		"declaration-block-trailing-semicolon": null, // Require or disallow the use of trailing semicolons in the declaration block string: "always (must always have a trailing semicolon)" | never (no trailing semicolon)"
		"selector-class-pattern": null, // Format of the forced selector class name
		"value-no-vendor-prefix": null, // Shut down vendor-prefix(To address the multi-line omission -webkit-box)
		"at-rule-no-unknown": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global", "v-deep", "deep"]
			}
		]
	}
};
