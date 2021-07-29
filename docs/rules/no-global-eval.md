# no-global-eval

Disallows the [`$.globalEval`](https://api.jquery.com/jQuery.globalEval/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

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
* [Test source](/tests/rules/no-global-eval.js)
