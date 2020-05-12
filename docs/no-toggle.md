# no-toggle

Disallows the [`.toggle`](https://api.jquery.com/toggle/) method.

⚠️ This rule is deprecated. Use [`no-visibility`](no-visibility.md) instead.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).toggle();
$div.toggle();
$( 'div' ).first().toggle();
$( 'div' ).append( $( 'input' ).toggle() );
```

✔️ The following patterns are not considered errors:
```js
toggle();
[].toggle();
div.toggle();
div.toggle;
```
## Rule source

* [src/rules/no-toggle.js](/src/rules/no-toggle.js)
