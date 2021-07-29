# no-map-util

Disallows the [`$.map`](https://api.jquery.com/jQuery.map/) utility. Prefer `Array#map`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.map();
```

✔️ Examples of **correct** code:
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
* [Test source](/tests/rules/no-map-util.js)
