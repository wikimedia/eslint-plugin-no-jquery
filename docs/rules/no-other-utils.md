# no-other-utils

Disallows all utilities not covered by more specific rules.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.dequeue();
$.noConflict();
$.uniqueSort();
$.otherUtil();
```

✔️ Examples of **correct** code:
```js
$.each();
$.find();
$.map();
$.otherProperty;
$div.otherMethod();
method();
```

## Resources

* [Rule source](/src/rules/no-other-utils.js)
* [Test source](/src/tests/no-other-utils.js)
