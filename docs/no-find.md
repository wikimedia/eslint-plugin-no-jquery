# no-find

Disallows the .find method and $.find utility. Prefer Document#querySelectorAll.

## Rule details

✗ The following patterns are considered errors:
```js
$.find();
$( 'div' ).find();
$div.find();
$( 'div' ).first().find();
$( 'div' ).append( $( 'input' ).find() );
```

✓ The following patterns are not considered errors:
```js
find();
[].find();
div.find();
div.find;
```
