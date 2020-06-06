# no-wrap

Disallows the [`.wrap`](https://api.jquery.com/wrap/)/[`.wrapAll`](https://api.jquery.com/wrapAll/)/[`.wrapInner`](https://api.jquery.com/wrapInner/)/[`.unwrap`](https://api.jquery.com/unwrap/) methods.

## Rule details

❌ Examples of **incorrect** code:
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

✔️ Examples of **correct** code:
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

## Resources

* [Rule source](/src/rules/no-wrap.js)
* [Test source](/src/tests/no-wrap.js)
