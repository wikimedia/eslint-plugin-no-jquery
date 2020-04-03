# no-map

Disallows the [`.map`](https://api.jquery.com/map/) method and [`$.map`](https://api.jquery.com/jQuery.map/) utility. Prefer `Array#map`.

## Rule details

❌ The following patterns are considered errors:
```js
$.map();
$( 'div' ).map();
$div.map();
$( 'div' ).first().map();
$( 'div' ).append( $( 'input' ).map() );
$( 'select' ).val( [] ).map();
```

✔️ The following patterns are not considered errors:
```js
map();
[].map();
div.map();
div.map;
$( 'div' ).toArray().map();
$( 'select' ).val().map();
```
## Rule source

* [rules/no-map.js](../rules/no-map.js)
