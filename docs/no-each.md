# no-each

Disallows the [`.each`](https://api.jquery.com/each/) method and [`$.each`](https://api.jquery.com/jQuery.each/) utility. Prefer `Array#forEach`.

## Rule details

❌ The following patterns are considered errors:
```js
$.each();
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
```
## Rule source

* [rules/no-each.js](../src/rules/no-each.js)
