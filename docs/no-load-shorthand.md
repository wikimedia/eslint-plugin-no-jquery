# no-load-shorthand

Disallows the .load method when used as a shorthand for `.on( 'load', function )` or `.trigger( 'load' )`. Prefer $.on or $.trigger.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).load( function () {} );
$div.load( function () {} );
$div.load( () => {} );
$( 'div' ).first().load( function () {} );
$( 'div' ).append( $( 'input' ).load( function () {} ) );
```

✔️ The following patterns are not considered errors:
```js
load();
[].load();
div.load();
div.load;
$.load();
$div.load( 'url' );
$div.load( couldBeUrl );
```
## Rule source

* [rules/no-load-shorthand.js](../rules/no-load-shorthand.js)
