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

* [src/rules/no-deferred.js](/src/rules/no-deferred.js)
