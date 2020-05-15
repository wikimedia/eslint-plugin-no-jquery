# no-trim

Disallows the [`$.trim`](https://api.jquery.com/jQuery.trim/) utility. Prefer `String#trim`.

This rule is enabled in `plugin:no-jquery/deprecated-3.5`.

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

## Resources

* [Rule source](/src/rules/no-trim.js)
* [Test source](/src/tests/no-trim.js)
