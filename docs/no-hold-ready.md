# no-hold-ready

Disallows the [`$.holdReady`](https://api.jquery.com/jQuery.holdReady/) utility.

This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

## Rule details

❌ The following patterns are considered errors:
```js
$.holdReady();
```

✔️ The following patterns are not considered errors:
```js
holdReady();
'test'.holdReady();
'test'.holdReady;
```
## Rule source

* [rules/no-hold-ready.js](../rules/no-hold-ready.js)
