# no-camel-case

Disallows the `$.camelCase` utility.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.camelCase();
```

✔️ Examples of **correct** code:
```js
camelCase();
myClass.camelCase();
$div.camelCase();
```

## Resources

* [Rule source](/src/rules/no-camel-case.js)
* [Test source](/src/tests/no-camel-case.js)
