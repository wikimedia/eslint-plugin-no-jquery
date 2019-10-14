# no-error-shorthand

Disallows the .error method. Prefer $.on or $.trigger to $.error.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).error();
$div.error();
$( 'div' ).first().error();
$( 'div' ).append( $( 'input' ).error() );
```

✔️ The following patterns are not considered errors:
```js
error();
[].error();
div.error();
div.error;
$.error();
```
## Rule source

* [rules/no-error-shorthand.js](../rules/no-error-shorthand.js)
