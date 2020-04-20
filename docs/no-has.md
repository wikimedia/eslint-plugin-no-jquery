# no-has

Disallows the [`.has`](https://api.jquery.com/has/) method.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).has();
$div.has();
$( 'div' ).first().has();
$( 'div' ).append( $( 'input' ).has() );
```

✔️ The following patterns are not considered errors:
```js
has();
[].has();
div.has();
div.has;
```
## Rule source

* [rules/no-has.js](../src/rules/no-has.js)
