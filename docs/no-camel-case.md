# no-camel-case

Disallows the `$.camelCase` utility.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.camelCase();
```

✔️ The following patterns are not considered errors:
```js
camelCase();
myClass.camelCase();
$div.camelCase();
```

## Rule source

* [src/rules/no-camel-case.js](/src/rules/no-camel-case.js)
