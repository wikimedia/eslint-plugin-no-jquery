# no-merge

Disallows the [`$.merge`](https://api.jquery.com/jQuery.merge/) utility. Prefer `Array#concat`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.merge();
```

✔️ Examples of **correct** code:
```js
merge();
'test'.merge();
'test'.merge;
```

## Resources

* [Rule source](/src/rules/no-merge.js)
* [Test source](/tests/rules/no-merge.js)
