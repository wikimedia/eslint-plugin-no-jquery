# no-hide

Disallows the .hide method.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).hide();
$div.hide();
$( 'div' ).first().hide();
$( 'div' ).append( $( 'input' ).hide() );
```

✔️ The following patterns are not considered errors:
```js
hide();
[].hide();
div.hide();
div.hide;
```
## Rule source

* [rules/no-hide.js](../rules/no-hide.js)
