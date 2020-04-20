# no-find-util

Disallows the `$.find` utility. Prefer `Document#querySelectorAll`.

## Rule details

❌ The following patterns are considered errors:
```js
$.find();
```

✔️ The following patterns are not considered errors:
```js
find();
[].find();
div.find();
div.find;
$.extend().find();
$div.myPlugin( 'foo' ).find();
$( 'div' ).find();
$div.find();
$( 'div' ).first().find();
$( 'div' ).append( $( 'input' ).find() );
```
## Rule source

* [rules/no-find-util.js](../src/rules/no-find-util.js)
