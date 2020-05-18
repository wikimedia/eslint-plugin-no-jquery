# no-unload-shorthand

Disallows the [`.unload`](https://api.jquery.com/unload/) method. Prefer `.on` or `.trigger`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).unload( handler );
$div.unload();
$( 'div' ).first().unload();
$( 'div' ).append( $( 'input' ).unload() );
```

✔️ Examples of **correct** code:
```js
unload();
[].unload();
div.unload();
div.unload;
$.unload();
```

🔧 Examples of code **fixed** by using  `--fix`:
```js
$( 'div' ).unload( handler ); /* → */ $( 'div' ).on( 'unload', handler );
$div.unload();                /* → */ $div.trigger( 'unload' );
```

## Resources

* [Rule source](/src/rules/no-unload-shorthand.js)
* [Test source](/src/tests/no-unload-shorthand.js)
