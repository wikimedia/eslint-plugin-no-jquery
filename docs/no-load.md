# no-load

Disallows the [`.load`](https://api.jquery.com/load/) method. Prefer `fetch`.

This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).load();
$div.load();
$( 'div' ).first().load();
$( 'div' ).append( $( 'input' ).load() );
```

✔️ The following patterns are not considered errors:
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
