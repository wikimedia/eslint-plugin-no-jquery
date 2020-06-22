# no-deferred

Disallows [`$.Deferred`](https://api.jquery.com/jQuery.Deferred/) constructor. Prefer `Promise`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.Deferred();
new $.Deferred();
```

✔️ Examples of **correct** code:
```js
Deferred();
new Deferred();
'test'.Deferred();
'test'.Deferred;
```

## Resources

* [Rule source](/src/rules/no-deferred.js)
* [Test source](/src/tests/no-deferred.js)
