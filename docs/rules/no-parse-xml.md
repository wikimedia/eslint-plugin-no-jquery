# no-parse-xml

Disallows the [`$.parseXML`](https://api.jquery.com/jQuery.parseXML/) utility. Prefer `DOMParser#parseFromString`.

⚙️ This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.parseXML();
```

✔️ Examples of **correct** code:
```js
parseXML();
'test'.parseXML();
'test'.parseXML;
```

## Resources

* [Rule source](/src/rules/no-parse-xml.js)
* [Test source](/src/tests/no-parse-xml.js)
