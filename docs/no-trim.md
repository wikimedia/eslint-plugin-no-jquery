# no-trim

Disallows the $.trim utility. Prefer String#trim to $.trim.

## Rule details

❌ The following patterns are considered errors:
```js
$.trim( ' test ' );
```

✔️ The following patterns are not considered errors:
```js
trim( ' test ' );
' test '.trim();
' test '.trim;
$( 'input' ).text().trim();
$( 'input' ).data( 'foo' ).trim();
```
