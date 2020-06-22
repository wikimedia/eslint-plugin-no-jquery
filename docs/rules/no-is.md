# no-is

Disallows the [`.is`](https://api.jquery.com/is/) method. Prefer `Element#matches`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).is();
$div.is();
$( 'div' ).first().is();
$( 'div' ).append( $( 'input' ).is() );
```

✔️ Examples of **correct** code:
```js
is();
[].is();
div.is();
div.is;
```

## Resources

* [Rule source](/src/rules/no-is.js)
* [Test source](/src/tests/no-is.js)
