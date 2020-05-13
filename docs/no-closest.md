# no-closest

Disallows the [`.closest`](https://api.jquery.com/closest/) method. Prefer `Element#closest`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).closest();
$div.closest();
$( 'div' ).first().closest();
$( 'div' ).append( $( 'input' ).closest() );
```

✔️ The following patterns are not considered errors:
```js
closest();
[].closest();
div.closest();
div.closest;
```

## Resources

* [Rule source](/src/rules/no-closest.js)
* [Test source](/src/tests/no-closest.js)
