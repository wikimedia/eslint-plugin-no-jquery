# no-global-selector

Disallows global selectors which search the whole document. Encourages users to keep references to DOM nodes in memory, instead of selecting them from the DOM each time.

## Rule details

❌ The following patterns are considered errors:
```js
$( '.div' );
$( '#id' );
$( '.selector' );
$( '.selector > .child' );
$( '.selector', '.context' );
$( '.selector', '' );
$( '.selector', null );
$( '.selector', undefined );
$( '.selector', $( '.context' ) );
```

✔️ The following patterns are not considered errors:
```js
$( '<div>' );
$( '<div attr=val>' );
$( '<div>', { attr: 'val' } );
$( ' \t<div attr = val> \n' );
$( context ).find( '.selector' );
$( '.selector', context );
$( '.selector', '#' );
$( '.selector', [] );
$( function () {} );
$( variable );
$( [] );
$( '' );
$( null );
$( null );
$( undefined );
$( false );
$( '#' );
```
## Rule source

* [rules/no-global-selector.js](../src/rules/no-global-selector.js)
