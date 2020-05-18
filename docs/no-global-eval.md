# no-global-eval

Disallows the [`$.globalEval`](https://api.jquery.com/jQuery.globalEval/) utility.

## Rule details

❌ Examples of **incorrect** code:
```js
$.globalEval();
```

✔️ Examples of **correct** code:
```js
globalEval();
'test'.globalEval();
'test'.globalEval;
```

## Resources

* [Rule source](/src/rules/no-global-eval.js)
* [Test source](/src/tests/no-global-eval.js)
