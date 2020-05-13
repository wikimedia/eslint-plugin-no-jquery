# no-global-eval

Disallows the [`$.globalEval`](https://api.jquery.com/jQuery.globalEval/) utility.

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

## Resources

* [Rule source](/src/rules/no-global-eval.js)
* [Test source](/src/tests/no-global-eval.js)
