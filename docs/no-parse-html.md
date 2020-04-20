# no-parse-html

Disallows the [`$.parseHTML`](https://api.jquery.com/jQuery.parseHTML/) utility. Prefer `DOMImplementation#createHTMLDocument`.

## Rule details

❌ The following patterns are considered errors:
```js
$.parseHTML();
```

✔️ The following patterns are not considered errors:
```js
parseHTML();
'test'.parseHTML();
'test'.parseHTML;
```
## Rule source

* [rules/no-parse-html.js](../src/rules/no-parse-html.js)
