# no-now

Disallows the [`$.now`](https://api.jquery.com/jQuery.now/) utility. Prefer `(new Date).getTime()`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.now();
```

✔️ Examples of **correct** code:
```js
now();
myClass.now();
$div.now();
```

🔧 Examples of code **fixed** by using  `--fix`:
```js
$.now(); /* → */ Date.now();
```

## Resources

* [Rule source](/src/rules/no-now.js)
* [Test source](/src/tests/no-now.js)
