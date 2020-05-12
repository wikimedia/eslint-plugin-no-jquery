# no-hide

Disallows the [`.hide`](https://api.jquery.com/hide/) method.

⚠️ This rule is deprecated. Use [`no-visibility`](no-visibility.md) instead.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).hide();
$div.hide();
$( 'div' ).first().hide();
$( 'div' ).append( $( 'input' ).hide() );
```

✔️ The following patterns are not considered errors:
```js
hide();
[].hide();
div.hide();
div.hide;
```
## Rule source

* [src/rules/no-hide.js](/src/rules/no-hide.js)
