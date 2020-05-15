# no-global-selector

Disallows global selectors which search the whole document. Encourages users to keep references to DOM nodes in memory, instead of selecting them from the DOM each time. Use the `allowIds` option to allow single ID selectors.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' );
$( '#id' );
$( '.selector' );
$( '.selector > .child' );
$( '.selector', '.context' );
$( '.selector', '' );
$( '.selector', null );
$( '.selector', undefined );
$( '.selector', $( '.context' ) );
```

❌ With `[{"allowIds":true}]` options:
```js
$( '#id>div' );
$( '#id~div' );
$( '#id div' );
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

✔️ With `[{"allowIds":true}]` options:
```js
$( '#id' );
$( '#id-foo_bar1' );
```

## Resources

* [Rule source](/src/rules/no-global-selector.js)
* [Test source](/src/tests/no-global-selector.js)
