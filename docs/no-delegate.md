# no-delegate

Disallows the [`.delegate`](https://api.jquery.com/delegate/)/[`.undelegate`](https://api.jquery.com/undelegate/) methods. Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).delegate();
$div.delegate();
$( 'div' ).first().delegate();
$( 'div' ).append( $( 'input' ).delegate() );
$( 'div' ).undelegate();
$div.undelegate();
$( 'div' ).first().undelegate();
$( 'div' ).append( $( 'input' ).undelegate() );
```

✔️ The following patterns are not considered errors:
```js
delegate();
[].delegate();
div.delegate();
div.delegate;
undelegate();
[].undelegate();
div.undelegate();
div.undelegate;
```
## Rule source

* [src/rules/no-delegate.js](/src/rules/no-delegate.js)
