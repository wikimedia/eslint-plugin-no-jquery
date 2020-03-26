# no-contains

Disallows the [`$.contains`](https://api.jquery.com/jQuery.contains/) utility. Prefer `Node#contains` to `$.contains`.

## Rule details

❌ The following patterns are considered errors:
```js
$.contains();
```

✔️ The following patterns are not considered errors:
```js
contains();
myClass.contains();
$div.contains();
```
## Rule source

* [rules/no-contains.js](../rules/no-contains.js)
