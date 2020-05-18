# no-closest

Disallows the [`.closest`](https://api.jquery.com/closest/) method. Prefer `Element#closest`.

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
* [Test source](/src/tests/no-closest.js)
