# no-serialize

Disallows the [`.serialize`](https://api.jquery.com/serialize/)/[`.serializeArray`](https://api.jquery.com/serializeArray/) methods. Prefer `FormData` or `URLSearchParams`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).serialize();
$div.serialize();
$( 'div' ).first().serialize();
$( 'div' ).append( $( 'input' ).serialize() );
$( 'div' ).serializeArray();
$div.serializeArray();
$( 'div' ).first().serializeArray();
$( 'div' ).append( $( 'input' ).serializeArray() );
```

✔️ The following patterns are not considered errors:
```js
serialize();
[].serialize();
div.serialize();
div.serialize;
serializeArray();
[].serializeArray();
div.serializeArray();
div.serializeArray;
```

## Resources

* [Rule source](/src/rules/no-serialize.js)
* [Test source](/src/tests/no-serialize.js)
