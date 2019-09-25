# no-unbind

Disallows the .unbind method. Prefer $.off/EventTarget#removeEventListener to $.unbind.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).unbind();
$div.unbind();
$( 'div' ).first().unbind();
$( 'div' ).append( $( 'input' ).unbind() );
```

✓ The following patterns are not considered errors:
```js
unbind();
[].unbind();
div.unbind();
div.unbind;
```
