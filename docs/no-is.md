# no-is

Disallows the `.is` method. Prefer `Element#matches` to `$.is`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).is();
$div.is();
$( 'div' ).first().is();
$( 'div' ).append( $( 'input' ).is() );
```

✔️ The following patterns are not considered errors:
```js
is();
[].is();
div.is();
div.is;
```
## Rule source

* [rules/no-is.js](../rules/no-is.js)
