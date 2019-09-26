# no-live

Disallows the .live method. Prefer $.on/EventTarget#addEventListener to $.live.

This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).live();
$div.live();
$( 'div' ).first().live();
$( 'div' ).append( $( 'input' ).live() );
```

✓ The following patterns are not considered errors:
```js
live();
[].live();
div.live();
div.live;
```
