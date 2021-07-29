# no-has

Disallows the [`.has`](https://api.jquery.com/has/) method.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).has();
$div.has();
$( 'div' ).first().has();
$( 'div' ).append( $( 'input' ).has() );
```

✔️ Examples of **correct** code:
```js
has();
[].has();
div.has();
div.has;
```

## Resources

* [Rule source](/src/rules/no-has.js)
* [Test source](/tests/rules/no-has.js)
