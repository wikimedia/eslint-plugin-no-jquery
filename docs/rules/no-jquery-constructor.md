# no-jquery-constructor

Disallows the jQuery constructor `$()`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' );
$( '#id' );
$( '.selector' );
$( '.selector', '.context' );
$( function () {} );
$( [] );
$( undefined );
$( false );
jQuery( 'div' );
```

✔️ Examples of **correct** code:
```js
foo.$( '.selector' );
foo.$( '<div>' );
foo.jQuery( '.selector' );
foo.jQuery( '<div>' );
$;
jQuery;
```

## Resources

* [Rule source](/src/rules/no-jquery-constructor.js)
* [Test source](/src/tests/no-jquery-constructor.js)
