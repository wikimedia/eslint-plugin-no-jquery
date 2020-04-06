# no-find-collection

Disallows the [`.find`](https://api.jquery.com/find/) method. Prefer `Document#querySelectorAll`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).find();
$div.find();
$( 'div' ).first().find();
$( 'div' ).append( $( 'input' ).find() );
```

✔️ The following patterns are not considered errors:
```js
$.find();
find();
[].find();
div.find();
div.find;
$.extend().find();
$div.myPlugin( 'foo' ).find();
```
## Rule source

* [rules/no-find-collection.js](../rules/no-find-collection.js)
