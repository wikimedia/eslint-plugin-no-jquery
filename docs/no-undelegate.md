# no-undelegate

Disallows the .undelegate method. Prefer $.off/EventTarget#removeEventListener to $.undelegate.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).undelegate();
$div.undelegate();
$( 'div' ).first().undelegate();
$( 'div' ).append( $( 'input' ).undelegate() );
```

✓ The following patterns are not considered errors:
```js
undelegate();
[].undelegate();
div.undelegate();
div.undelegate;
```
