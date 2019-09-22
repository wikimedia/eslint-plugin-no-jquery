# no-attr

Disallows the .attr method and $.attr utility. Prefer Element#getAttribute/setAttribute.

## Rule details

✗ The following patterns are considered errors:
```js
$.attr();
$( 'div' ).attr();
$div.attr();
$( 'div' ).first().attr();
$( 'div' ).append( $( 'input' ).attr() );
$( 'div' ).attr( 'name' );
$( 'div' ).attr( 'name', 'random' );
```

✓ The following patterns are not considered errors:
```js
attr();
[].attr();
div.attr();
div.attr;
```
