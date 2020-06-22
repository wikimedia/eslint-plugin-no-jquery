# no-parent

Disallows the [`.parent`](https://api.jquery.com/parent/) method. Prefer `Node#parentElement`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).parent();
$div.parent();
$( 'div' ).first().parent();
$( 'div' ).append( $( 'input' ).parent() );
```

✔️ Examples of **correct** code:
```js
parent();
[].parent();
div.parent();
div.parent;
```

## Resources

* [Rule source](/src/rules/no-parent.js)
* [Test source](/src/tests/no-parent.js)
