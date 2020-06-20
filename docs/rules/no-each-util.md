# no-each-util

Disallows the [`$.each`](https://api.jquery.com/jQuery.each/) utility. Prefer `Array#forEach`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.each();
```

✔️ Examples of **correct** code:
```js
each();
[].each();
div.each();
div.each;
$( 'div' ).each();
$div.each();
$( 'div' ).first().each();
$( 'div' ).append( $( 'input' ).each() );
```

## Resources

* [Rule source](/src/rules/no-each-util.js)
* [Test source](/src/tests/no-each-util.js)
