# no-global-selector

Disallows global selectors which search the whole document. Encourages users to keep references to DOM nodes in memory, instead of selecting them from the DOM each time. Use the `allowIds` option to allow single ID selectors.

## Rule details

❌ Examples of **incorrect** code:
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

❌ Examples of **incorrect** code with `[{"allowIds":true}]` options:
```js
$( '#id>div' );
$( '#id~div' );
$( '#id div' );
```

✔️ Examples of **correct** code:
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
$( undefined );
$( false );
$( '#' );
```

✔️ Examples of **correct** code with `[{"allowIds":true}]` options:
```js
$( '#id' );
$( '#id-foo_bar1' );
```

## Resources

* [Rule source](/src/rules/no-global-selector.js)
* [Test source](/src/tests/no-global-selector.js)
