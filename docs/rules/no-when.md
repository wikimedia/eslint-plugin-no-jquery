# no-when

Disallows the [`$.when`](https://api.jquery.com/jQuery.when/) utility. Prefer `Promise.all`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.when( a, b );
```

✔️ Examples of **correct** code:
```js
When();
new When();
'test'.when();
'test'.when;
$when();
```

## Resources

* [Rule source](/src/rules/no-when.js)
* [Test source](/src/tests/no-when.js)
