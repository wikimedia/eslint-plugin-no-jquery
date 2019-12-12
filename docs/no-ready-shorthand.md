# no-ready-shorthand

Disallows the `.ready` method. Prefer `$` to `$.ready`.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$( document ).ready();
$div.ready();
$( 'div' ).first().ready();
$( 'div' ).append( $( 'input' ).ready() );
```

✔️ The following patterns are not considered errors:
```js
ready();
[].ready();
div.ready();
div.ready;
$.ready();
$( document ).on( 'ready', function () {} );
$( function () {} );
```
## Rule source

* [rules/no-ready-shorthand.js](../rules/no-ready-shorthand.js)
