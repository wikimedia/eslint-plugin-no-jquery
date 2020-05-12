# no-unbind

Disallows the [`.unbind`](https://api.jquery.com/unbind/) method. Prefer `.off`/`EventTarget#removeEventListener`.

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

* [src/rules/no-unbind.js](/src/rules/no-unbind.js)
