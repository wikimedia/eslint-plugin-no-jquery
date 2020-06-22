# no-each-collection

Disallows the [`.each`](https://api.jquery.com/each/) method. Prefer `Array#forEach`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
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
$.each();
```

## Resources

* [Rule source](/src/rules/no-each-collection.js)
* [Test source](/src/tests/no-each-collection.js)
