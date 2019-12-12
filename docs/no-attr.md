# no-attr

Disallows the `.attr`/`.removeAttr` methods and `$.attr`/`$.removeAttr` utilies.

## Rule details

❌ The following patterns are considered errors:
```js
$.attr();
$( 'div' ).attr();
$div.attr();
$( 'div' ).first().attr();
$( 'div' ).append( $( 'input' ).attr() );
$( 'div' ).attr( 'name' );
$( 'div' ).attr( 'name', 'random' );
$.removeAttr();
$( 'div' ).removeAttr( 'name' );
```

✔️ The following patterns are not considered errors:
```js
attr();
[].attr();
div.attr();
div.attr;
removeAttr();
div.removeAttr;
```
## Rule source

* [rules/no-attr.js](../rules/no-attr.js)
