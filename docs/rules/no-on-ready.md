# no-on-ready

Disallows using the ready event on the document.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( document ).on( 'ready', function () {} );
$document.on( 'ready', function () {} );
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

🔧 Examples of code **fixed** by this rule:
```js
$( document ).on( 'ready', function () {} ); /* → */ $( document ).ready( function () {} );
$document.on( 'ready', function () {} );     /* → */ $document.ready( function () {} );
```

## Resources

* [Rule source](/src/rules/no-on-ready.js)
* [Test source](/tests/rules/no-on-ready.js)
