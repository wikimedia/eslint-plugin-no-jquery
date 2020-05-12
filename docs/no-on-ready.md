# no-on-ready

Disallows using the ready event on the document.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( document ).on( 'ready', function () {} );
$document.on( 'ready', function () {} );
$document.on( 'ready' );
```

✔️ The following patterns are not considered errors:
```js
$( document ).on( 'click', function () {} );
$( document ).on();
$document.on( 'click', function () {} );
$document.on();
$document.on( ready );
$document.on( ready() );
$document.ready();
$( function () {} );
document.on( 'ready' );
document.on( 'ready', function () {} );
```
## Rule source

* [src/rules/no-on-ready.js](/src/rules/no-on-ready.js)
