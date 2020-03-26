# no-map-collection

Disallows the [`.map`](https://api.jquery.com/map/) method. Prefer `Array#map` to `$.map`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).map();
$div.map();
$( 'div' ).first().map();
$( 'div' ).append( $( 'input' ).map() );
```

✔️ The following patterns are not considered errors:
```js
map();
[].map();
div.map();
div.map;
$.map();
$( 'select' ).val().map();
```
## Rule source

* [rules/no-map-collection.js](../rules/no-map-collection.js)
