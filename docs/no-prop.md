# no-prop

Disallows the .prop method and $.prop utility. Prefer direct property access to $.prop.

## Rule details

✗ The following patterns are considered errors:
```js
$.prop();
$( 'div' ).prop();
$div.prop();
$( 'div' ).first().prop();
$( 'div' ).append( $( 'input' ).prop() );
```

✓ The following patterns are not considered errors:
```js
prop();
[].prop();
div.prop();
div.prop;
```
