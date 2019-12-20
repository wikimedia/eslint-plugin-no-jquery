# eslint-plugin-no-jquery release history

## v2.3.1
* New feature: Show deprecation message in linting errors (Ed Sanders)

—
* Deprecated rule: `no-die`; use `no-live` (Ed Sanders)
* Deprecated rule: `no-unbind`; use `no-bind` (Ed Sanders)
* Deprecated rule: `no-undelegate`; use `no-delegate` (Ed Sanders)

—
* Rule fix: Remove `load` from `no-event-shorthand` (Ed Sanders)

—
* Docs: Build generic "Prefer" messages for docs when node===true (Ed Sanders)
* Docs: Escape all code snippets (Ed Sanders)
* Docs: Monospace rule names (Ed Sanders)

—
* Release: Add icons to readme section headings (Ed Sanders)
* Release: Fix Changelog markdown list spacing (Ed Sanders)
* Release: Use a limited ruleset for lint-fixing documentation snippets (Ed Sanders)

—
* Code: Add `triggerHandler` to `nonCollectionReturningMethods` (Ed Sanders)
* Code: Check documentation in CI (Ed Sanders)
* Code: Check rules are listed in README.md & index.js (Ed Sanders)
* Code: Migrate from Travis to GitHub Actions (James D. Forrester)
* Code: Remove incorrect TODO comment (Ed Sanders)


## v2.3.0
* New rule: `variable-pattern` (Ed Sanders)
* New rule: `no-parse-xml` (Ed Sanders)
* New rule: `no-visibility` as a group alias for `no-show`, `no-hide`, & `no-toggle` (Ed Sanders)

—
* New config: `slim` as a profile for users of the jQuery slim build (Ed Sanders)

—
* Deprecated rule: `no-show` (Ed Sanders)
* Deprecated rule: `no-hide` (Ed Sanders)
* Deprecated rule: `no-toggle` (Ed Sanders)

—
* Rule fix: Add `allowDeep` options to `no-extend` (Ed Sanders)
* Rule fix: Add `hasData` method to `no-data` rule (Ed Sanders)
* Rule fix: Enforce single tag style in `no-parse-html-literal` (Ed Sanders)

—
* New fixer: Add fixer for `no-event-shorthand` and similar (Ed Sanders)
* New fixer: Add fixer for `no-noop` (Ed Sanders)
* New fixer: Add fixer for `no-now` (Ed Sanders)
* New fixer: Add fixer for `no-size` (Ed Sanders)

—
* Docs: Link to each rule's definition (Ed Sanders)
* Docs: Switch `constructorAliases`/`variablePattern` in README (Ed Sanders)
* Docs: Pad fixer examples so they align (Ed Sanders)
* Docs: Output example fixes in documentation (Ed Sanders)

—
* Release: Update LICENSE authors (Ed Sanders)

—
* Code: Add `npm run testpath` for running a single test (Ed Sanders)
* Code: Add a test that automatically captures all rules (Ed Sanders)
* Code: Avoid `key in object` lookup (Ed Sanders)
* Code: Improvements to collection return detection (Ed Sanders)
* Code: More fixes to jQuery method return types (Ed Sanders)
* Code: Rename .eslintrc to .eslintrc.json (Ed Sanders)
* Code: Update eslint-config-wikimedia (Ed Sanders)


## v2.2.1
* Release: Update index.js and README with missing rules (Ed Sanders)


## v2.2.0
* New rule: `no-camel-case` (Christophe Coevoet)
* New rule: `no-constructor-attributes` (Ed Sanders)
* New rule: `no-contains` (Christophe Coevoet)
* New rule: `no-error` (Ed Sanders)
* New rule: `no-is-empty-object` (Ed Sanders)
* New rule: `no-is-plain-object` (Ed Sanders)
* New rule: `no-node-name` (Ed Sanders)

—
* Rule fix: Add `removeAttr` to `no-attr` rule (Ed Sanders)
* Rule fix: Add `removeProp` to `no-remove-prop` rule (Ed Sanders)
* Rule fix: Add ajax method shorthands to `no-ajax-events` and `no-event-shorthand` (Ed Sanders)
* Rule fix: Detect concatenated selectors in `no-sizzle` (Ed Sanders)
* Rule fix: Handle concatenated strings and other methods in `no-parse-html-literal` (Ed Sanders)
* Rule fix: Include the `$.clone` utility in the `no-clone` rule (Ed Sanders)
* Rule fix: Include the `$.css` utility in the `no-css` rule (Ed Sanders)
* Rule fix: Make error message in `no-parse-html-literal` less specific (Ed Sanders)
* Rule fix: Separate out positional sizzle selectors and add to `deprecated-3.4` (Ed Sanders)

—
* New fixer: Add fixer for `no-and-self` (Ed Sanders)
* New fixer: Add fixer for `no-is-array` (Ed Sanders)
* New fixer: Add fixer for `no-parse-json` (Ed Sanders)
* New fixer: Add fixer for `no-unique` (Ed Sanders)

—
* Docs: Build documentation from tests (Ed Sanders)
* Docs: Comment in documentation when rules are fixable (Ed Sanders)
* Docs: Document `npm run doc` (Ed Sanders)
* Docs: Document when rules are included in a deprecation set (Ed Sanders)

—
* Bug: Fix the detection of jQuery collection calls for non-fluent APIs (e.g. `.toArray()`) (Christophe Coevoet)
* Bug: Support arrow functions (Ed Sanders)

—
* Code: Add an EditorConfig config file (Christophe Coevoet)
* Code: Introduce and use createCollectionOrUtilMethodRule (Ed Sanders)
* Code: Update development dependencies (Ed Sanders)

—
* Release: Add `files` list to package.json (Ed Sanders)
* Release: Add global settings for configuring jQuery constructor/variable names (Ed Sanders)
* Release: Update deprecation rulesets (Ed Sanders)

—
* Improve messages' references to methods vs. static methods (Christophe Coevoet)


## v2.1.0
* New rule: `no-class-state` (Ed Sanders)

—
* Docs: Fix plugin name (Maurício Meneghini Fauth)

—
* Code: Upgrade eslint-config-wikimedia to 0.12.0 (James D. Forrester)


## v2.0.0
* New rule options: `[{allowScroll:true}]` in `no-animate` (Ed Sanders)

—
* Renamed repository, rules and documentation to eslint-plugin-no-jquery (Ed Sanders)
* Update eslint dev dependency to 5.14.0 (Ed Sanders)

# Release history as wikimedia/eslint-plugin-jquery


## v1.3.2-wmf.6
* New rule: `no-box-model` (Ed Sanders)
* New rule: `no-browser` (Ed Sanders)
* New rule: `no-context-prop` (Ed Sanders)
* New rule: `no-error-shorthand` (Ed Sanders)
* New rule: `no-fx-interval` (Ed Sanders)
* New rule: `no-hold-ready` (Ed Sanders)
* New rule: `no-is-numeric` (Ed Sanders)
* New rule: `no-load-shorthand` (Ed Sanders)
* New rule: `no-now` (Ed Sanders)
* New rule: `no-on-ready` (Ed Sanders)
* New rule: `no-ready-shorthand` (Ed Sanders)
* New rule: `no-selector-prop` (Ed Sanders)
* New rule: `no-sub` (Ed Sanders)
* New rule: `no-support` (Ed Sanders)
* New rule: `no-unload-shorthand` (Ed Sanders)

—
* Bug: Fix `isjQuery` util to match `$`-prefixed properties (Ed Sanders)
* Bug: Fix `isjQuery` to not match methods of jQuery properties (Ed Sanders)
* Bug: Only catch `toggle(arg)` if `arg` is definitely not a boolean (Ed Sanders)

—
* Code: De-deduplicate rule generation (Ed Sanders)
* Code: Remove useless export of traverse method (Ed Sanders)


## v1.3.2-wmf.5
* New rule: `no-animate-toggle` (Ed Sanders)
* Add "Prefer CSS transitions" to animation rule messages (Ed Sanders)
* Add " or $.trigger" to `no-event-shorthand` warning (Ed Sanders)


## v1.3.2-wmf.4
* Fix typo in profile listing (Ed Sanders)


## v1.3.2-wmf.3
* Revert package name, breaking npm package references to instead fix git references (Ed Sanders)


## v1.3.2-wmf.2
* Provide version-specific deprecation profiles (James D. Forrester)
* Move 'deprecated' profile as a pointer to latest, remove old 'slim' profile (Ed Sanders)

—
* New rule: `no-and-self` (Ed Sanders)
* New rule: `no-die` and `no-live` (Ed Sanders)
* New rule: `no-event-shorthand` (Ed Sanders)
* New rule: `no-global-selector` (Ed Sanders)
* New rule: `no-is-window` (Ed Sanders)
* New rule: `no-noop` (Ed Sanders)
* New rule: `no-parse-html-literal` (Ed Sanders)
* New rule: `no-parse-json` (Ed Sanders)
* New rule: `no-type` (Ed Sanders)
* New rule: `no-unbind` (Ed Sanders)
* New rule: `no-undelegate` (Ed Sanders)
* New rule: `no-unique` (Ed Sanders)

—
* Miscellaneous release-related clean-up (James D. Forrester)


## v1.3.2-wmf.1
* New rule: `no-is-array` (Mackie Underdown)
* New rule: `no-is-function` (Brendan Abbott; renamed by Ed Sanders pre-release)
* New rule: `no-extend` (Brendan Abbott)
* New rule: `no-grep` (Ed Sanders)
* New rule: `no-each-collection` (Ed Sanders)
* New rule: `no-each-util` (Ed Sanders)
* New rule: `no-map-collection` (Ed Sanders)
* New rule: `no-map-util` (Ed Sanders)

—
* Deprecated rule: `no-each` (Ed Sanders)
* Deprecated rule: `no-map` (Ed Sanders)

—
* Code: Update development dependencies (David Graham)
* Code: Refactor to use new rule format (Ed Sanders)

—
* README: Note that this is a fork (James D. Forrester)
