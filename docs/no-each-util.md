# no-each-util

Disallows the $.each utility. Prefer Array#forEach to $.each.

## Rule details

✗ The following patterns are considered errors:
```js
$.each();
```

✓ The following patterns are not considered errors:
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
