# no-show

Disallows the .show method.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).show();
$div.show();
$( 'div' ).first().show();
$( 'div' ).append( $( 'input' ).show() );
```

✔️ The following patterns are not considered errors:
```js
show();
[].show();
div.show();
div.show;
```
## Rule source

* [rules/no-show.js](../rules/no-show.js)
