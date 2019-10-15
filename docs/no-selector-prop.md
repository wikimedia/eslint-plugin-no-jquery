# no-selector-prop

Disallows the $.selector property.

This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).selector;
$div.selector;
$div.selector.prop;
$div.selector.method();
$( 'div' ).first().selector;
f( $div.selector );
$( 'div' ).append( $( 'input' ).selector );
```

✔️ The following patterns are not considered errors:
```js
selector;
div.selector;
$div.prop.selector;
$div.selector();
$div.selector( arg );
```
## Rule source

* [rules/no-selector-prop.js](../rules/no-selector-prop.js)
