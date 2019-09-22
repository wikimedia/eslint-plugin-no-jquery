# no-sizzle

Disallows selector extensions provided by Sizzle.

## Rule details

✗ The following patterns are considered errors:
```js
$( ':animated' );
$( ':button' );
$( ':checkbox' );
$( ':eq' );
$( ':even' );
$( ':file' );
$( ':first' );
$( ':gt' );
$( ':has' );
$( ':header' );
$( ':hidden' );
$( ':image' );
$( ':input' );
$( ':last' );
$( ':lt' );
$( ':odd' );
$( ':parent' );
$( ':password' );
$( ':radio' );
$( ':reset' );
$( ':selected' );
$( ':submit' );
$( ':text' );
$( ':visible' );
$( 'div' ).children( ':first' );
$( 'div' ).closest( ':first' );
$( 'div' ).filter( ':first' );
$( 'div' ).find( ':first' );
$( 'div' ).has( ':first' );
$( 'div' ).is( ':first' );
$( 'div' ).next( ':first' );
$( 'div' ).nextAll( ':first' );
$( 'div' ).nextUntil( ':first' );
$( 'div' ).not( ':first' );
$( 'div' ).parent( ':first' );
$( 'div' ).parents( ':first' );
$( 'div' ).parentsUntil( ':first' );
$( 'div' ).prev( ':first' );
$( 'div' ).prevAll( ':first' );
$( 'div' ).prevUntil( ':first' );
$( 'div' ).siblings( ':first' );
$( 'div:first' );
$( 'div:first' ).find( 'p' );
$( 'div' ).find( 'p:first' ).addClass( 'test' ).find( 'p' );
$( 'div' ).find( ':first' );
$( 'div' ).find( 'div:animated' );
$div.find( 'form input:checkbox' );
```

✓ The following patterns are not considered errors:
```js
find( ':input' );
div.find( ':input' );
$( this ).on( 'custom:input' );
$( this ).on( 'custom:selected' );
$( this ).find( '.selected' );
$( this ).find( ':checked' );
$( this ).find( 'input' );
$( this ).find( ':first-child' );
$( this ).find( ':first-child div' );
$( this ).find( ':last-child' );
$( this ).find( ':last-child div' );
$( this ).find( $() );
$( this ).find( function () {} );
$( this ).find();
$( function () {} );
```
