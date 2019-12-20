# no-unbind

Disallows the `.unbind` method. Prefer `$.off`/`EventTarget#removeEventListener` to `$.unbind`.

⚠️ This rule is deprecated. Use [`no-bind`](no-bind.md) instead.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).unbind();
$div.unbind();
$( 'div' ).first().unbind();
$( 'div' ).append( $( 'input' ).unbind() );
```

✔️ The following patterns are not considered errors:
```js
unbind();
[].unbind();
div.unbind();
div.unbind;
```
## Rule source

* [rules/no-unbind.js](../rules/no-unbind.js)
