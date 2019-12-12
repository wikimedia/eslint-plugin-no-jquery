# no-param

Disallows the `$.param` utility. Prefer `FormData` or `URLSearchParams` to `$.param`.

## Rule details

❌ The following patterns are considered errors:
```js
$.param();
```

✔️ The following patterns are not considered errors:
```js
param();
'test'.param();
'test'.param;
```
## Rule source

* [rules/no-param.js](../rules/no-param.js)
