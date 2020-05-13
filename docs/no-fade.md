# no-fade

Disallows the [`.fadeIn`](https://api.jquery.com/fadeIn/)/[`.fadeOut`](https://api.jquery.com/fadeOut/)/[`.fadeTo`](https://api.jquery.com/fadeTo/)/[`.fadeToggle`](https://api.jquery.com/fadeToggle/) methods. Prefer CSS transitions.

This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).fadeIn();
$div.fadeIn();
$( 'div' ).first().fadeIn();
$( 'div' ).append( $( 'input' ).fadeIn() );
$( 'div' ).fadeOut();
$div.fadeOut();
$( 'div' ).first().fadeOut();
$( 'div' ).append( $( 'input' ).fadeOut() );
$( 'div' ).fadeTo();
$div.fadeTo();
$( 'div' ).first().fadeTo();
$( 'div' ).append( $( 'input' ).fadeTo() );
$( 'div' ).fadeToggle();
$div.fadeToggle();
$( 'div' ).first().fadeToggle();
$( 'div' ).append( $( 'input' ).fadeToggle() );
```

✔️ The following patterns are not considered errors:
```js
fadeIn();
[].fadeIn();
div.fadeIn();
div.fadeIn;
fadeOut();
[].fadeOut();
div.fadeOut();
div.fadeOut;
fadeTo();
[].fadeTo();
div.fadeTo();
div.fadeTo;
fadeToggle();
[].fadeToggle();
div.fadeToggle();
div.fadeToggle;
```

## Resources

* [Rule source](/src/rules/no-fade.js)
* [Test source](/src/tests/no-fade.js)
