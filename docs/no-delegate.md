# no-delegate

Disallows the .delegate method. Prefer $.on/EventTarget#addEventListener to $.delegate.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).delegate();
$div.delegate();
$( 'div' ).first().delegate();
$( 'div' ).append( $( 'input' ).delegate() );
```

✓ The following patterns are not considered errors:
```js
delegate();
[].delegate();
div.delegate();
div.delegate;
```
