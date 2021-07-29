# no-delegate

Disallows the [`.delegate`](https://api.jquery.com/delegate/)/[`.undelegate`](https://api.jquery.com/undelegate/) methods. Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).delegate();
$div.delegate();
$( 'div' ).first().delegate();
$( 'div' ).append( $( 'input' ).delegate() );
$( 'div' ).undelegate();
$div.undelegate();
$( 'div' ).first().undelegate();
$( 'div' ).append( $( 'input' ).undelegate() );
```

✔️ Examples of **correct** code:
```js
delegate();
[].delegate();
div.delegate();
div.delegate;
undelegate();
[].undelegate();
div.undelegate();
div.undelegate;
```

## Resources

* [Rule source](/src/rules/no-delegate.js)
* [Test source](/tests/rules/no-delegate.js)
