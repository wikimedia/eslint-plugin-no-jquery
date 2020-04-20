# no-show

Disallows the [`.show`](https://api.jquery.com/show/) method.

⚠️ This rule is deprecated. Use [`no-visibility`](no-visibility.md) instead.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).show();
$div.show();
$( 'div' ).first().show();
$( 'div' ).append( $( 'input' ).show() );
```

✔️ The following patterns are not considered errors:
```js
show();
[].show();
div.show();
div.show;
```
## Rule source

* [rules/no-show.js](../src/rules/no-show.js)
