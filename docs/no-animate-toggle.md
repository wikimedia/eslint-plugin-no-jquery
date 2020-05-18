# no-animate-toggle

Disallows the duration argument when using the [`.show`](https://api.jquery.com/show/), [`.hide`](https://api.jquery.com/hide/) & [`.toggle`](https://api.jquery.com/toggle/) methods. Prefer CSS transitions.

⚙️ This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ Examples of **incorrect** code:
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

✔️ Examples of **correct** code:
```js
$div.show();
$( 'div' ).show();
$( 'div' ).show;
$.show( 'fast' );
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

## Resources

* [Rule source](/src/rules/no-animate-toggle.js)
* [Test source](/src/tests/no-animate-toggle.js)
