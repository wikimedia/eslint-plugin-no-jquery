# no-deferred

Disallows [`$.Deferred`](https://api.jquery.com/jQuery.Deferred/) constructor. Prefer `Promise`.

## Rule details

❌ The following patterns are considered errors:
```js
$.Deferred();
new $.Deferred();
```

✔️ The following patterns are not considered errors:
```js
Deferred();
new Deferred();
'test'.Deferred();
'test'.Deferred;
```

## Resources

* [Rule source](/src/rules/no-deferred.js)
* [Test source](/src/tests/no-deferred.js)
