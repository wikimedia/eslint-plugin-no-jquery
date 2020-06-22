# no-grep

Disallows the [`$.grep`](https://api.jquery.com/jQuery.grep/) utility. Prefer `Array#filter`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.grep();
```

✔️ Examples of **correct** code:
```js
grep();
'test'.grep();
'test'.grep;
```

## Resources

* [Rule source](/src/rules/no-grep.js)
* [Test source](/src/tests/no-grep.js)
