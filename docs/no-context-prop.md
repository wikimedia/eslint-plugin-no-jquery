# no-context-prop

Disallows the $.context property.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).context;
$div.context;
$div.context.prop;
$div.context.method();
$( 'div' ).first().context;
f( $div.context );
$( 'div' ).append( $( 'input' ).context );
```

✓ The following patterns are not considered errors:
```js
context;
div.context;
$div.prop.context;
$div.context();
$div.context( arg );
```