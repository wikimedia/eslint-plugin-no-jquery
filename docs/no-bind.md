# no-bind

Disallows the [`.bind`](https://api.jquery.com/bind/)/[`.unbind`](https://api.jquery.com/unbind/) methods. Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).bind();
$div.bind();
$( 'div' ).first().bind();
$( 'div' ).append( $( 'input' ).bind() );
$( 'div' ).unbind();
$div.unbind();
$( 'div' ).first().unbind();
$( 'div' ).append( $( 'input' ).unbind() );
```

✔️ The following patterns are not considered errors:
```js
bind();
[].bind();
div.bind();
div.bind;
$div.remove.bind( $div );
unbind();
[].unbind();
div.unbind();
div.unbind;
$div.remove.unbind( $div );
```
## Rule source

* [rules/no-bind.js](../src/rules/no-bind.js)
