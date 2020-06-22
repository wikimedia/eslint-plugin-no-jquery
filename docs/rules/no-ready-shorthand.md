# no-ready-shorthand

Disallows the [`.ready`](https://api.jquery.com/ready/) method. Prefer `$()`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( document ).ready();
$div.ready();
$( 'div' ).first().ready();
$( 'div' ).append( $( 'input' ).ready() );
```

✔️ Examples of **correct** code:
```js
ready();
[].ready();
div.ready();
div.ready;
$.ready();
$( document ).on( 'ready', function () {} );
$( function () {} );
```

## Resources

* [Rule source](/src/rules/no-ready-shorthand.js)
* [Test source](/src/tests/no-ready-shorthand.js)
