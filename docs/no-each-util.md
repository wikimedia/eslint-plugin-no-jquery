# no-each-util

Disallows the [`$.each`](https://api.jquery.com/jQuery.each/) utility. Prefer `Array#forEach`.

## Rule details

❌ The following patterns are considered errors:
```js
$.each();
```

✔️ The following patterns are not considered errors:
```js
each();
[].each();
div.each();
div.each;
$( 'div' ).each();
$div.each();
$( 'div' ).first().each();
$( 'div' ).append( $( 'input' ).each() );
```
## Rule source

* [src/rules/no-each-util.js](/src/rules/no-each-util.js)
