# no-undelegate

Disallows the [`.undelegate`](https://api.jquery.com/undelegate/) method. Prefer `.off`/`EventTarget#removeEventListener`.

⚠️ This rule is deprecated. Use [`no-delegate`](no-delegate.md) instead.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).undelegate();
$div.undelegate();
$( 'div' ).first().undelegate();
$( 'div' ).append( $( 'input' ).undelegate() );
```

✔️ The following patterns are not considered errors:
```js
undelegate();
[].undelegate();
div.undelegate();
div.undelegate;
```

## Resources

* [Rule source](/src/rules/no-undelegate.js)
* [Test source](/src/tests/no-undelegate.js)
