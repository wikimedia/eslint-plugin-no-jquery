# no-each

Disallows the [`.each`](https://api.jquery.com/each/) method and [`$.each`](https://api.jquery.com/jQuery.each/) utility. Prefer `Array#forEach`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.each();
$( 'div' ).each();
$div.each();
$( 'div' ).first().each();
$( 'div' ).append( $( 'input' ).each() );
```

✔️ Examples of **correct** code:
```js
each();
[].each();
div.each();
div.each;
```

## Resources

* [Rule source](/src/rules/no-each.js)
* [Test source](/tests/rules/no-each.js)
