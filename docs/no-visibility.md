# no-visibility

Disallows the `.show`/`.hide`/`.toggle` methods.

## Rule details

❌ The following patterns are considered errors:
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

✔️ The following patterns are not considered errors:
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
## Rule source

* [rules/no-visibility.js](../rules/no-visibility.js)
