# no-prop

Disallows the .prop/removeProp methods and $.prop/removeProp utilies.

## Rule details

✗ The following patterns are considered errors:
```js
$.prop();
$( 'div' ).prop();
$div.prop();
$( 'div' ).first().prop();
$( 'div' ).append( $( 'input' ).prop() );
$( 'div' ).removeProp();
```

✓ The following patterns are not considered errors:
```js
prop();
[].prop();
div.prop();
div.prop;
removeProp();
div.removeProp();
```
