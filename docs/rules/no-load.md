# no-load

Disallows the [`.load`](https://api.jquery.com/load/) method. Prefer `fetch`.

⚙️ This rule is enabled in `plugin:no-jquery/slim`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).load();
$div.load();
$( 'div' ).first().load();
$( 'div' ).append( $( 'input' ).load() );
```

✔️ Examples of **correct** code:
```js
load();
[].load();
div.load();
div.load;
$.load();
```

## Resources

* [Rule source](/src/rules/no-load.js)
* [Test source](/src/tests/no-load.js)
