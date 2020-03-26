# no-die

Disallows the [`.die`](https://api.jquery.com/die/) method. Prefer `$.off`/`EventTarget#removeEventListener` to `$.die`.

⚠️ This rule is deprecated. Use [`no-live`](no-live.md) instead.

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
