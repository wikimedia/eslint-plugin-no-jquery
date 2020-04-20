# no-data

Disallows the [`.data`](https://api.jquery.com/data/)/[`.removeData`](https://api.jquery.com/removeData/)/`.hasData` methods and [`$.data`](https://api.jquery.com/jQuery.data/)/[`$.removeData`](https://api.jquery.com/jQuery.removeData/)/[`$.hasData`](https://api.jquery.com/jQuery.hasData/) utilies. Prefer `WeakMap`.

## Rule details

❌ The following patterns are considered errors:
```js
$.data( elem, 'foo' );
$( 'div' ).data( 'foo', 'bar' );
$div.data( 'foo' );
$( 'div' ).first().data( 'foo', 'bar' );
$( 'div' ).append( $( 'input' ).data( 'foo' ) );
$.removeData( elem, 'foo' );
$( 'div' ).removeData( 'foo' );
$div.removeData( 'foo' );
$.hasData( elem );
```

✔️ The following patterns are not considered errors:
```js
data();
[].data();
div.data();
div.data;
removeData();
[].removeData();
div.removeData();
div.removeData;
hasData();
[].hasData();
div.hasData();
div.hasData;
```
## Rule source

* [rules/no-data.js](../src/rules/no-data.js)
