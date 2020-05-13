# no-val

Disallows the [`.val`](https://api.jquery.com/val/) method. Prefer `HTMLInputElement#value`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).val();
$div.val();
$( 'div' ).first().val();
$( 'div' ).append( $( 'input' ).val() );
```

✔️ The following patterns are not considered errors:
```js
val();
[].val();
div.val();
div.val;
```

## Resources

* [Rule source](/src/rules/no-val.js)
* [Test source](/src/tests/no-val.js)
