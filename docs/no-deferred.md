# no-deferred

Disallows $.Deferred constructor. Prefer Promise.

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
