# no-contains

Disallows the [`$.contains`](https://api.jquery.com/jQuery.contains/) utility. Prefer `Node#contains`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

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
* [Test source](/tests/rules/no-contains.js)
