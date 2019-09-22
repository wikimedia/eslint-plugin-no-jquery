# no-die

Disallows the .die method. Prefer $.off/EventTarget#removeEventListener to $.die.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).die();
$div.die();
$( 'div' ).first().die();
$( 'div' ).append( $( 'input' ).die() );
```

✓ The following patterns are not considered errors:
```js
die();
[].die();
div.die();
div.die;
```
