# no-sub

Disallows the `$.sub` utility.

This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

## Rule details

❌ The following patterns are considered errors:
```js
$.sub();
```

✔️ The following patterns are not considered errors:
```js
sub();
'test'.sub();
'test'.sub;
```
## Rule source

* [rules/no-sub.js](../rules/no-sub.js)
