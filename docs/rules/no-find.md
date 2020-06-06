# no-find

Disallows the [`.find`](https://api.jquery.com/find/) method and `$.find` utility. Prefer `Document#querySelectorAll`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.find();
$( 'div' ).find();
$div.find();
$( 'div' ).first().find();
$( 'div' ).append( $( 'input' ).find() );
```

✔️ Examples of **correct** code:
```js
find();
[].find();
div.find();
div.find;
$.extend().find();
$div.myPlugin( 'foo' ).find();
```

## Resources

* [Rule source](/src/rules/no-find.js)
* [Test source](/src/tests/no-find.js)
