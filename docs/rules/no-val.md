# no-val

Disallows the [`.val`](https://api.jquery.com/val/) method. Prefer `HTMLInputElement#value`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).val();
$div.val();
$( 'div' ).first().val();
$( 'div' ).append( $( 'input' ).val() );
```

✔️ Examples of **correct** code:
```js
val();
[].val();
div.val();
div.val;
```

## Resources

* [Rule source](/src/rules/no-val.js)
* [Test source](/src/tests/no-val.js)
