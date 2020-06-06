# no-visibility

Disallows the [`.show`](https://api.jquery.com/show/)/[`.hide`](https://api.jquery.com/hide/)/[`.toggle`](https://api.jquery.com/toggle/) methods.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).show();
$div.show();
$( 'div' ).first().show();
$( 'div' ).append( $( 'input' ).show() );
$( 'div' ).hide();
$div.hide();
$( 'div' ).first().hide();
$( 'div' ).append( $( 'input' ).hide() );
$( 'div' ).toggle();
$div.toggle();
$( 'div' ).first().toggle();
$( 'div' ).append( $( 'input' ).toggle() );
```

✔️ Examples of **correct** code:
```js
show();
[].show();
div.show();
div.show;
hide();
[].hide();
div.hide();
div.hide;
toggle();
[].toggle();
div.toggle();
div.toggle;
```

## Resources

* [Rule source](/src/rules/no-visibility.js)
* [Test source](/src/tests/no-visibility.js)
