# no-selector-prop

Disallows the [`.selector`](https://api.jquery.com/selector/) property.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).selector;
$div.selector;
$div.selector.prop;
$div.selector.method();
$( 'div' ).first().selector;
f( $div.selector );
$( 'div' ).append( $( 'input' ).selector );
```

✔️ Examples of **correct** code:
```js
selector;
div.selector;
$div.prop.selector;
$div.selector();
$div.selector( arg );
```

## Resources

* [Rule source](/src/rules/no-selector-prop.js)
* [Test source](/src/tests/no-selector-prop.js)
