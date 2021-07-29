# no-trim

Disallows the [`$.trim`](https://api.jquery.com/jQuery.trim/) utility. Prefer `String#trim`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.5`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.trim( ' test ' );
```

✔️ Examples of **correct** code:
```js
trim( ' test ' );
' test '.trim();
' test '.trim;
$( 'input' ).text().trim();
$( 'input' ).data( 'foo' ).trim();
```

## Resources

* [Rule source](/src/rules/no-trim.js)
* [Test source](/tests/rules/no-trim.js)
