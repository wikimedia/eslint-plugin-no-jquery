# no-parse-html

Disallows the $.parseHTML utility. Prefer DOMImplementation#createHTMLDocument to $.parseHTML.

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
