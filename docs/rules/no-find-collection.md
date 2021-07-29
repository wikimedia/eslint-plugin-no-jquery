# no-find-collection

Disallows the [`.find`](https://api.jquery.com/find/) method. Prefer `Document#querySelectorAll`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).find();
$div.find();
$( 'div' ).first().find();
$( 'div' ).append( $( 'input' ).find() );
```

✔️ Examples of **correct** code:
```js
$.find();
find();
[].find();
div.find();
div.find;
$.extend().find();
$div.myPlugin( 'foo' ).find();
```

## Resources

* [Rule source](/src/rules/no-find-collection.js)
* [Test source](/tests/rules/no-find-collection.js)
