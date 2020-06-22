# no-parse-html

Disallows the [`$.parseHTML`](https://api.jquery.com/jQuery.parseHTML/) utility. Prefer `DOMImplementation#createHTMLDocument`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.parseHTML();
```

✔️ Examples of **correct** code:
```js
parseHTML();
'test'.parseHTML();
'test'.parseHTML;
```

## Resources

* [Rule source](/src/rules/no-parse-html.js)
* [Test source](/src/tests/no-parse-html.js)
