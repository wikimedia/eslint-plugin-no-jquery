# no-contains

Disallows the [`$.contains`](https://api.jquery.com/jQuery.contains/) utility. Prefer `Node#contains`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.contains();
```

✔️ Examples of **correct** code:
```js
contains();
myClass.contains();
$div.contains();
```

## Resources

* [Rule source](/src/rules/no-contains.js)
* [Test source](/src/tests/no-contains.js)
