# no-show

Disallows the [`.show`](https://api.jquery.com/show/) method.

⚠️ This rule is deprecated. Use [`no-visibility`](no-visibility.md) instead.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).show();
$div.show();
$( 'div' ).first().show();
$( 'div' ).append( $( 'input' ).show() );
```

✔️ Examples of **correct** code:
```js
show();
[].show();
div.show();
div.show;
```

## Resources

* [Rule source](/src/rules/no-show.js)
* [Test source](/tests/rules/no-show.js)
