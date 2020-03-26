# no-error

Disallows the [`$.error`](https://api.jquery.com/jQuery.error/) utility. Prefer `throw` to `$.error`.

## Rule details

❌ The following patterns are considered errors:
```js
$.error();
```

✔️ The following patterns are not considered errors:
```js
nodeName();
myClass.nodeName();
$div.nodeName();
```
## Rule source

* [rules/no-error.js](../rules/no-error.js)
