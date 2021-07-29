# no-type

Disallows the [`$.type`](https://api.jquery.com/jQuery.type/) utility. Prefer `typeof`/`instanceof`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.type();
```

✔️ Examples of **correct** code:
```js
type();
myMethod.type();
myMethod.type;
```

## Resources

* [Rule source](/src/rules/no-type.js)
* [Test source](/tests/rules/no-type.js)
