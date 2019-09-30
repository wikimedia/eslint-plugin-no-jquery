# no-size

Disallows the .size method. Prefer length to $.size.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).size();
$div.size();
$( 'div' ).first().size();
$( 'div' ).append( $( 'input' ).size() );
```

✔️ The following patterns are not considered errors:
```js
size();
[].size();
div.size();
div.size;
```
