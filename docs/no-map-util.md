# no-map-util

Disallows the $.map utility. Prefer Array#map to $.map.

## Rule details

❌ The following patterns are considered errors:
```js
$.map();
```

✔️ The following patterns are not considered errors:
```js
map();
[].map();
div.map();
div.map;
$( 'div' ).map();
$div.map();
$( 'div' ).first().map();
$( 'div' ).append( $( 'input' ).map() );
$( 'select' ).val().map();
```
