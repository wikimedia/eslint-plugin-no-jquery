# no-animate-toggle

Disallows the duration argument when using the .show, .hide & .toggle methods. Prefer CSS transitions.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).show( 'fast' );
$div.show( 500 );
$( 'div' ).first().show( { duration: 'slow' } );
$( 'div' ).append( $( 'input' ).show( { duration: 'slow' } ) );
$( 'div' ).hide( 'fast' );
$div.hide( 500 );
$( 'div' ).first().hide( { duration: 'slow' } );
$( 'div' ).append( $( 'input' ).hide( { duration: 'slow' } ) );
$( 'div' ).toggle( 'fast' );
$div.toggle( 500 );
$( 'div' ).first().toggle( { duration: 'slow' } );
$( 'div' ).append( $( 'input' ).toggle( { duration: 'slow' } ) );
```

✓ The following patterns are not considered errors:
```js
$div.show();
$( 'div' ).show();
$( 'div' ).show;
$div.toggle();
$( 'div' ).toggle();
$( 'div' ).toggle;
$div.toggle();
$div.toggle( false );
$div.toggle( true );
$div.toggle( variableCouldBeBoolean );
$div.toggle( !!'0' );
$div.toggle( getBoolean() );
$( 'div' ).toggle();
$( 'div' ).toggle;
```
