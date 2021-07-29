# no-context-prop

Disallows the [`.context`](https://api.jquery.com/context/) property.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.10`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).context;
$div.context;
$div.context.prop;
$div.context.method();
$( 'div' ).first().context;
f( $div.context );
$( 'div' ).append( $( 'input' ).context );
```

✔️ Examples of **correct** code:
```js
context;
div.context;
$div.prop.context;
$div.context();
$div.context( arg );
```

## Resources

* [Rule source](/src/rules/no-context-prop.js)
* [Test source](/tests/rules/no-context-prop.js)
