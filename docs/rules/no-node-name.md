# no-node-name

Disallows the [`$.nodeName`](https://api.jquery.com/jQuery.nodeName/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.nodeName();
```

✔️ Examples of **correct** code:
```js
nodeName();
myClass.nodeName();
$div.nodeName();
```

## Resources

* [Rule source](/src/rules/no-node-name.js)
* [Test source](/src/tests/no-node-name.js)
