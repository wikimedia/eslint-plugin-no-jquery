# no-each-collection

Disallows the .each method. Prefer Array#forEach to $.each.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).each();
$div.each();
$( 'div' ).first().each();
$( 'div' ).append( $( 'input' ).each() );
```

✓ The following patterns are not considered errors:
```js
each();
[].each();
div.each();
div.each;
$.each();
```
