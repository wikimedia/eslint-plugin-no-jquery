# no-each-collection

Disallows the [`.each`](https://api.jquery.com/each/) method. Prefer `Array#forEach`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).each();
$div.each();
$( 'div' ).first().each();
$( 'div' ).append( $( 'input' ).each() );
```

✔️ The following patterns are not considered errors:
```js
each();
[].each();
div.each();
div.each;
$.each();
```

## Rule source

* [src/rules/no-each-collection.js](/src/rules/no-each-collection.js)
