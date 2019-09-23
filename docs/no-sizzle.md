# no-sizzle

Disallows selector extensions provided by Sizzle.

## Rule details

✗ The following patterns are considered errors:
✗ With `[{"allowPositional":true}]` options:
```js
$( ':animated' );
```
```js
$( ':animated' );
$( ':button' );
$( ':checkbox' );
$( ':eq(2)' );
$( ':even' );
$( ':file' );
$( ':first' );
$( ':gt(2)' );
$( ':has(.foo)' );
$( ':header' );
$( ':hidden' );
$( ':image' );
$( ':input' );
$( ':last' );
$( ':lt(2)' );
$( ':nth(2)' );
$( ':odd' );
$( ':parent' );
$( ':password' );
$( ':radio' );
$( ':reset' );
$( ':selected' );
$( ':submit' );
$( ':text' );
$( ':visible' );
$( 'div' ).children( ':visible' );
$( 'div' ).closest( ':visible' );
$( 'div' ).filter( ':visible' );
$( 'div' ).find( ':visible' );
$( 'div' ).has( ':visible' );
$( 'div' ).is( ':visible' );
$( 'div' ).next( ':visible' );
$( 'div' ).nextAll( ':visible' );
$( 'div' ).nextUntil( ':visible' );
$( 'div' ).not( ':visible' );
$( 'div' ).parent( ':visible' );
$( 'div' ).parents( ':visible' );
$( 'div' ).parentsUntil( ':visible' );
$( 'div' ).prev( ':visible' );
$( 'div' ).prevAll( ':visible' );
$( 'div' ).prevUntil( ':visible' );
$( 'div' ).siblings( ':visible' );
$( 'div:visible' );
$( 'div:visible' ).find( 'p' );
$( 'div' ).find( 'p:visible' ).addClass( 'test' ).find( 'p' );
$( 'div' ).find( ':visible' );
$( 'div' ).find( 'div:animated' );
$div.find( 'form input:checkbox' );
```
✗ With `[{"allowOther":true}]` options:
```js
$( ':eq(2)' );
$( ':even' );
$( ':first' );
$( ':gt(2)' );
$( ':last' );
$( ':lt(2)' );
$( ':nth(2)' );
$( ':odd' );
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
✓ With `[{"allowPositional":true}]` options:
```js
$( ':checked' );
```
✓ With `[{"allowOther":true}]` options:
```js
$( ':animated' );
$( ':button' );
$( ':checkbox' );
$( ':file' );
$( ':has(.foo)' );
$( ':header' );
$( ':hidden' );
$( ':image' );
$( ':input' );
$( ':parent' );
$( ':password' );
$( ':radio' );
$( ':reset' );
$( ':submit' );
$( ':text' );
$( ':visible' );
```
