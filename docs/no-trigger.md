# no-trigger

Disallows the .trigger method. Prefer EventTarget#dispatchEvent to $.trigger.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).trigger();
$div.trigger();
$( 'div' ).first().trigger();
$( 'div' ).append( $( 'input' ).trigger() );
```

✓ The following patterns are not considered errors:
```js
trigger();
[].trigger();
div.trigger();
div.trigger;
```
