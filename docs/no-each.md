# no-each

Disallows the .each method and $.each utility. Prefer Array#forEach.

## Rule details

✗ The following patterns are considered errors:
```js
$.each();
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
```
