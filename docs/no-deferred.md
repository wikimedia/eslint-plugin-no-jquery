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
## Rule source

* [rules/no-deferred.js](../rules/no-deferred.js)
