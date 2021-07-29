# no-closest

Disallows the [`.closest`](https://api.jquery.com/closest/) method. Prefer `Element#closest`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).closest();
$div.closest();
$( 'div' ).first().closest();
$( 'div' ).append( $( 'input' ).closest() );
```

✔️ Examples of **correct** code:
```js
closest();
[].closest();
div.closest();
div.closest;
```

## Resources

* [Rule source](/src/rules/no-closest.js)
* [Test source](/tests/rules/no-closest.js)
