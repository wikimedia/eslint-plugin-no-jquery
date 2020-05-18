# no-map-collection

Disallows the [`.map`](https://api.jquery.com/map/) method. Prefer `Array#map`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).map();
$div.map();
$( 'div' ).first().map();
$( 'div' ).append( $( 'input' ).map() );
```

✔️ Examples of **correct** code:
```js
map();
[].map();
div.map();
div.map;
$.map();
$( 'select' ).val().map();
```

## Resources

* [Rule source](/src/rules/no-map-collection.js)
* [Test source](/src/tests/no-map-collection.js)
