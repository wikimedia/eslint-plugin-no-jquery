# no-die

Disallows the `.die` method. Prefer `$.off`/`EventTarget#removeEventListener` to `$.die`.

This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).die();
$div.die();
$( 'div' ).first().die();
$( 'div' ).append( $( 'input' ).die() );
```

✔️ The following patterns are not considered errors:
```js
die();
[].die();
div.die();
div.die;
```
## Rule source

* [rules/no-die.js](../rules/no-die.js)
