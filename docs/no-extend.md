# no-extend

Disallows the [`$.extend`](https://api.jquery.com/jQuery.extend/) utility. Prefer `Object.assign` or the spread operator.

## Rule details

❌ Examples of **incorrect** code:
```js
$.extend( {}, foo );
$.extend( true, {}, foo );
```

❌ Examples of **incorrect** code with `[{"allowDeep":true}]` options:
```js
$.extend( {}, foo );
```

✔️ Examples of **correct** code:
```js
extend();
myMethod.extend();
myMethod.extend;
```

✔️ Examples of **correct** code with `[{"allowDeep":true}]` options:
```js
$.extend( true, {}, foo );
```

## Resources

* [Rule source](/src/rules/no-extend.js)
* [Test source](/src/tests/no-extend.js)
