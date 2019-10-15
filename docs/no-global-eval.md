# no-global-eval

Disallows the $.globalEval utility.

## Rule details

❌ The following patterns are considered errors:
```js
$.globalEval();
```

✔️ The following patterns are not considered errors:
```js
globalEval();
'test'.globalEval();
'test'.globalEval;
```
## Rule source

* [rules/no-global-eval.js](../rules/no-global-eval.js)
