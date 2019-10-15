# no-parent

Disallows the .parent method. Prefer node#parentElement to $.parent.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).parent();
$div.parent();
$( 'div' ).first().parent();
$( 'div' ).append( $( 'input' ).parent() );
```

✔️ The following patterns are not considered errors:
```js
parent();
[].parent();
div.parent();
div.parent;
```
## Rule source

* [rules/no-parent.js](../rules/no-parent.js)
