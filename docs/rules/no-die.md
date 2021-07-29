# no-die

Disallows the [`.die`](https://api.jquery.com/die/) method. Prefer `.off`/`EventTarget#removeEventListener`.

⚠️ This rule is deprecated. Use [`no-live`](no-live.md) instead.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).die();
$div.die();
$( 'div' ).first().die();
$( 'div' ).append( $( 'input' ).die() );
```

✔️ Examples of **correct** code:
```js
die();
[].die();
div.die();
div.die;
```

## Resources

* [Rule source](/src/rules/no-die.js)
* [Test source](/tests/rules/no-die.js)
