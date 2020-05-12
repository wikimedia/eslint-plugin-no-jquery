# no-error

Disallows the [`$.error`](https://api.jquery.com/jQuery.error/) utility. Prefer `throw`.

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

* [src/rules/no-error.js](/src/rules/no-error.js)
