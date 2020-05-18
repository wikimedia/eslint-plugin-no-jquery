# no-param

Disallows the [`$.param`](https://api.jquery.com/jQuery.param/) utility. Prefer `FormData` or `URLSearchParams`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.param();
```

✔️ Examples of **correct** code:
```js
param();
'test'.param();
'test'.param;
```

## Resources

* [Rule source](/src/rules/no-param.js)
* [Test source](/src/tests/no-param.js)
