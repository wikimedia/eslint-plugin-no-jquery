# no-map

Disallows the .map method and $.map utility. Prefer Array#map to $.map.

## Rule details

✗ The following patterns are considered errors:
```js
$.map();
$( 'div' ).map();
$div.map();
$( 'div' ).first().map();
$( 'div' ).append( $( 'input' ).map() );
```

✓ The following patterns are not considered errors:
```js
map();
[].map();
div.map();
div.map;
```
