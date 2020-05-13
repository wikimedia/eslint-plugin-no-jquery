# no-map-util

Disallows the [`$.map`](https://api.jquery.com/jQuery.map/) utility. Prefer `Array#map`.

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

## Resources

* [Rule source](/src/rules/no-map-util.js)
* [Test source](/src/tests/no-map-util.js)
