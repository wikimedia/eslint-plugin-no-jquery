# no-sub

Disallows the [`$.sub`](https://api.jquery.com/jQuery.sub/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.sub();
```

✔️ Examples of **correct** code:
```js
sub();
'test'.sub();
'test'.sub;
```

## Resources

* [Rule source](/src/rules/no-sub.js)
* [Test source](/src/tests/no-sub.js)
