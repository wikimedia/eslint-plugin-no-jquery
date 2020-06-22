# no-data

Disallows the [`.data`](https://api.jquery.com/data/)/[`.removeData`](https://api.jquery.com/removeData/)/`.hasData` methods and [`$.data`](https://api.jquery.com/jQuery.data/)/[`$.removeData`](https://api.jquery.com/jQuery.removeData/)/[`$.hasData`](https://api.jquery.com/jQuery.hasData/) utilies. Prefer `WeakMap`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
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

✔️ Examples of **correct** code:
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

## Resources

* [Rule source](/src/rules/no-data.js)
* [Test source](/src/tests/no-data.js)
