# no-param

Disallows the [`$.param`](https://api.jquery.com/jQuery.param/) utility. Prefer `FormData` or `URLSearchParams`.

## Rule details

❌ The following patterns are considered errors:
```js
$.param();
```

✔️ The following patterns are not considered errors:
```js
param();
'test'.param();
'test'.param;
```

## Resources

* [Rule source](/src/rules/no-param.js)
* [Test source](/src/tests/no-param.js)
