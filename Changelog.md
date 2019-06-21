# eslint-plugin-no-jquery release history

## v2.1.0
* New rule: `no-class-state` (Ed Sanders)

* README: Fix plugin name (Maurício Meneghini Fauth)
* build: Upgrade eslint-config-wikimedia to 0.12.0 (James D. Forrester)


## v2.0.0
* New rule options: `[{allowScroll:true}]` in `no-animate` (Ed Sanders)

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

* Bug: Fix `isjQuery` util to match `$`-prefixed properties (Ed Sanders)
* Bug: Fix `isjQuery` to not match methods of jQuery properties (Ed Sanders)
* Bug: Only catch `toggle(arg)` if `arg` is definitely not a boolean (Ed Sanders)

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

* Deprecated rule: `no-each` (Ed Sanders)
* Deprecated rule: `no-map` (Ed Sanders)

* code: Update development dependencies (David Graham)
* code: Refactor to use new rule format (Ed Sanders)

* README: Note that this is a fork (James D. Forrester)
