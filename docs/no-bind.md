# no-bind

Disallows the .bind method. Prefer $.on/EventTarget#addEventListener to $.bind.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).bind();
$div.bind();
$( 'div' ).first().bind();
$( 'div' ).append( $( 'input' ).bind() );
```

✔️ The following patterns are not considered errors:
```js
bind();
[].bind();
div.bind();
div.bind;
$div.remove.bind( $div );
```
