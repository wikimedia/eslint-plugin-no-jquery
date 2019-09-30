# no-toggle

Disallows the .toggle method.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).toggle();
$div.toggle();
$( 'div' ).first().toggle();
$( 'div' ).append( $( 'input' ).toggle() );
```

✔️ The following patterns are not considered errors:
```js
toggle();
[].toggle();
div.toggle();
div.toggle;
```
