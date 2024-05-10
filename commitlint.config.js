/** @type {import('cz-git'). UserConfig}*/

module.exports = {
	ignores: [commit => commit.includes("init")],
	extends: ["@commitlint/config-conventional"],
	rules: {

		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [1, "always"],
		"header-max-length": [2, "always", 108],
		"subject-empty": [2, "never"],
		"type-empty": [2, "never"],
		"subject-case": [0],
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"perf",
				"test",
				"build",
				"ci",
				"chore",
				"revert",
				"wip",
				"workflow",
				"types",
				"release"
			]
		]
	},
	prompt: {
		messages: {
			type: "Select the type of change that you're committing:",
			scope: "Denote the SCOPE of this change (optional):",
			customScope: "Denote the SCOPE of this change:",
			subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
			body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
			breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
			footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
			customFooterPrefixs: "Input ISSUES prefix:",
			footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
			confirmCommit: "Are you sure you want to proceed with the commit above?"
			// Chinese version
			// type: "Select the type you want to submit:",
			// scope: "Select a commit scope (optional):",
			// customScope: "Please enter a custom submission scope:",
			// subject: "Fill in a short concise description of the change :\n",
			// body: 'Fill in a more detailed description of the change (optional.') Use "|" to wrap :\n',
			// breaking: 'List non-compatible, significant changes (optional.') Use "|" to wrap :\n',
			// footerPrefixsSelect: "Простовання простовання простовання �
			// customFooterPrefixs: "Простовання простовання простованн�
			// footer: "Простовання простовання (optional) e.g.: #31, #I3244 :\n",
			// confirmCommit: "Простовання простовання пр
		},
		types: [
			{
				value: "feat",
				name: "feat:     🚀  A new feature",
				emoji: "🚀"
			},
			{
				value: "fix",
				name: "fix:      🧩  A bug fix",
				emoji: "🧩"
			},
			{
				value: "docs",
				name: "docs:     📚  Documentation only changes",
				emoji: "📚"
			},
			{
				value: "style",
				name: "style:    🎨  Changes that do not affect the meaning of the code",
				emoji: "🎨"
			},
			{
				value: "refactor",
				name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature",
				emoji: "♻️"
			},
			{
				value: "perf",
				name: "perf:     ⚡️  A code change that improves performance",
				emoji: "⚡️"
			},
			{
				value: "test",
				name: "test:     ✅  Adding missing tests or correcting existing tests",
				emoji: "✅"
			},
			{
				value: "build",
				name: "build:    📦️   Changes that affect the build system or external dependencies",
				emoji: "📦️"
			},
			{
				value: "ci",
				name: "ci:       🎡  Changes to our CI configuration files and scripts",
				emoji: "🎡"
			},
			{
				value: "chore",
				name: "chore:    🔨  Other changes that don't modify src or test files",
				emoji: "🔨"
			},
			{
				value: "revert",
				name: "revert:   ⏪️  Reverts a previous commit",
				emoji: "⏪️"
			}
			// { value: "characteristic", name: "characteristic:   🚀  What's new", emoji: "🚀" },
			// { value: "repair", name: "repair:   🧩  repair Chin-hsien", emoji: "🧩" },
			// { value: "documentation", name: "documentation:   📚  documentation alter", emoji: "📚" },
			// { value: "format", name: "format:   🎨  Code formatting (does not affect functionality, such as whitespace, semicolon, etc.)", emoji: "🎨" },
			// { value: "reconstitution", name: "reconstitution:   ♻️  Code refactoring（Excludes bug repairs, new features）", emoji: "♻️" },
			// { value: "performance", name: "performance:   ⚡️  performance optimize", emoji: "⚡️" },
			// { value: "Test", name: "Test:   ✅  Add a missed test or an existing test change", emoji: "✅" },
			// { value: "construct", name: "construct:   📦️  Build process, external dependency changes (e.g. upgrading npm packages, modifying webpack configurations, etc.).）", emoji: "📦️" },
			// { value: "integration", name: "integration:   🎡  Modify CI configurations and scripts", emoji: "🎡" },
			// { value: "regression", name: "regression:   ⏪️  rollback commit", emoji: "⏪️" },
			// { value: "other", name: "other:   🔨  Changes to the build process or ancillary tools and libraries (without affecting source files, test cases)", emoji: "🔨" }
		],
		useEmoji: true,
		themeColorCode: "",
		scopes: [],
		allowCustomScopes: true,
		allowEmptyScopes: true,
		customScopesAlign: "bottom",
		customScopesAlias: "custom",
		emptyScopesAlias: "empty",
		upperCaseSubject: false,
		allowBreakingChanges: ["feat", "fix"],
		breaklineNumber: 100,
		breaklineChar: "|",
		skipQuestions: [],
		issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
		customIssuePrefixsAlign: "top",
		emptyIssuePrefixsAlias: "skip",
		customIssuePrefixsAlias: "custom",
		allowCustomIssuePrefixs: true,
		allowEmptyIssuePrefixs: true,
		confirmColorize: true,
		maxHeaderLength: Infinity,
		maxSubjectLength: Infinity,
		minSubjectLength: 0,
		scopeOverrides: undefined,
		defaultBody: "",
		defaultIssues: "",
		defaultScope: "",
		defaultSubject: ""
	}
};
