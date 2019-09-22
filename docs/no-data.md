# no-data

Disallows the .data/removeData methods and $.data/removeData utilies.

## Rule details

✗ The following patterns are considered errors:
```js
$.data();
$( 'div' ).data();
$div.data();
$( 'div' ).first().data();
$( 'div' ).append( $( 'input' ).data() );
$.removeData();
$( 'div' ).removeData();
$div.removeData();
```

✓ The following patterns are not considered errors:
```js
data();
[].data();
div.data();
div.data;
removeData();
[].removeData();
div.removeData();
div.removeData;
```
