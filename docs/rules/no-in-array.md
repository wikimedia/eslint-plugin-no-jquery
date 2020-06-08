# no-in-array

Disallows the [`$.inArray`](https://api.jquery.com/jQuery.inArray/) utility. Prefer `Array#indexOf`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.inArray();
```

✔️ Examples of **correct** code:
```js
inArray();
'test'.inArray();
'test'.inArray;
```

## Resources

* [Rule source](/src/rules/no-in-array.js)
* [Test source](/src/tests/no-in-array.js)
