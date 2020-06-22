# no-other-methods

Disallows all methods not covered by more specific rules.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$div.add();
$div.height();
$div.prepend();
$div.otherMethod();
```

✔️ Examples of **correct** code:
```js
$div.each();
$div.find();
$div.map();
$div.otherProperty;
div.otherMethod();
$.otherUtil();
method();
```

## Resources

* [Rule source](/src/rules/no-other-methods.js)
* [Test source](/src/tests/no-other-methods.js)
