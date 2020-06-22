# no-find-util

Disallows the `$.find` utility. Prefer `Document#querySelectorAll`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.find();
```

✔️ Examples of **correct** code:
```js
find();
[].find();
div.find();
div.find;
$.extend().find();
$div.myPlugin( 'foo' ).find();
$( 'div' ).find();
$div.find();
$( 'div' ).first().find();
$( 'div' ).append( $( 'input' ).find() );
```

## Resources

* [Rule source](/src/rules/no-find-util.js)
* [Test source](/src/tests/no-find-util.js)
