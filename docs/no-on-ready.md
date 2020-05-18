# no-on-ready

Disallows using the ready event on the document.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( document ).on( 'ready', function () {} );
$document.on( 'ready', function () {} );
$document.on( 'ready' );
```

✔️ Examples of **correct** code:
```js
$( document ).on( 'click', function () {} );
$( document ).on();
$document.on( 'click', function () {} );
$document.on();
$document.on( ready );
$document.on( ready() );
$document.ready();
$( function () {} );
document.on( 'ready' );
document.on( 'ready', function () {} );
```

## Resources

* [Rule source](/src/rules/no-on-ready.js)
* [Test source](/src/tests/no-on-ready.js)
