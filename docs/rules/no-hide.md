# no-hide

Disallows the [`.hide`](https://api.jquery.com/hide/) method.

⚠️ This rule is deprecated. Use [`no-visibility`](no-visibility.md) instead.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).hide();
$div.hide();
$( 'div' ).first().hide();
$( 'div' ).append( $( 'input' ).hide() );
```

✔️ Examples of **correct** code:
```js
hide();
[].hide();
div.hide();
div.hide;
```

## Resources

* [Rule source](/src/rules/no-hide.js)
* [Test source](/tests/rules/no-hide.js)
