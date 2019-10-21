# no-parse-xml

Disallows the $.parseXML utility. Prefer DOMParser#parseFromString to $.parseXML.

## Rule details

❌ The following patterns are considered errors:
```js
$.parseXML();
```

✔️ The following patterns are not considered errors:
```js
parseXML();
'test'.parseXML();
'test'.parseXML;
```
## Rule source

* [rules/no-parse-xml.js](../rules/no-parse-xml.js)
