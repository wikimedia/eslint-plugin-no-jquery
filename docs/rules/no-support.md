# no-support

Disallows the [`$.support`](https://api.jquery.com/jQuery.support/) property.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.9`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.support;
$.support.style;
```

✔️ Examples of **correct** code:
```js
support;
a.support;
support.foo;
a.support.foo;
```

## Resources

* [Rule source](/src/rules/no-support.js)
* [Test source](/tests/rules/no-support.js)
