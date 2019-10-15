# no-load

Disallows the .load method. Prefer fetch to $.load.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).load();
$div.load();
$( 'div' ).first().load();
$( 'div' ).append( $( 'input' ).load() );
```

✔️ The following patterns are not considered errors:
```js
load();
[].load();
div.load();
div.load;
$.load();
```
## Rule source

* [rules/no-load.js](../rules/no-load.js)
