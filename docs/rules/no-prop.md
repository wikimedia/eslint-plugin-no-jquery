# no-prop

Disallows the [`.prop`](https://api.jquery.com/prop/)/[`.removeProp`](https://api.jquery.com/removeProp/) methods and `$.prop`/[`$.removeProp`](https://api.jquery.com/jQuery.removeProp/) utilies. Prefer direct property access.

## Rule details

❌ Examples of **incorrect** code:
```js
$.prop();
$( 'div' ).prop();
$div.prop();
$( 'div' ).first().prop();
$( 'div' ).append( $( 'input' ).prop() );
$( 'div' ).removeProp();
```

✔️ Examples of **correct** code:
```js
prop();
[].prop();
div.prop();
div.prop;
removeProp();
div.removeProp();
```

## Resources

* [Rule source](/src/rules/no-prop.js)
* [Test source](/src/tests/no-prop.js)
