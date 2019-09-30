# no-wrap

Disallows the .wrap/wrapAll/wrapInner/unwrap methods.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).wrap();
$div.wrap();
$( 'div' ).first().wrap();
$( 'div' ).append( $( 'input' ).wrap() );
$( 'div' ).wrapAll();
$div.wrapAll();
$( 'div' ).first().wrapAll();
$( 'div' ).append( $( 'input' ).wrapAll() );
$( 'div' ).wrapInner();
$div.wrapInner();
$( 'div' ).first().wrapInner();
$( 'div' ).append( $( 'input' ).wrapInner() );
$( 'div' ).unwrap();
$div.unwrap();
$( 'div' ).first().unwrap();
$( 'div' ).append( $( 'input' ).unwrap() );
```

✔️ The following patterns are not considered errors:
```js
wrap();
[].wrap();
div.wrap();
div.wrap;
wrapAll();
[].wrapAll();
div.wrapAll();
div.wrapAll;
wrapInner();
[].wrapInner();
div.wrapInner();
div.wrapInner;
unwrap();
[].unwrap();
div.unwrap();
div.unwrap;
```
