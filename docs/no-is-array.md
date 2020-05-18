# no-is-array

Disallows the [`$.isArray`](https://api.jquery.com/jQuery.isArray/) utility. Prefer `Array.isArray`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isArray( [] );
```

✔️ Examples of **correct** code:
```js
isArray();
'test'.isArray();
'test'.isArray;
```

🔧 Examples of code **fixed** by using  `--fix`:
```js
$.isArray( [] ); /* → */ Array.isArray( [] );
```

## Resources

* [Rule source](/src/rules/no-is-array.js)
* [Test source](/src/tests/no-is-array.js)
