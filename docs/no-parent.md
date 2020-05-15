# no-parent

Disallows the [`.parent`](https://api.jquery.com/parent/) method. Prefer `Node#parentElement`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).parent();
$div.parent();
$( 'div' ).first().parent();
$( 'div' ).append( $( 'input' ).parent() );
```

✔️ The following patterns are not considered errors:
```js
parent();
[].parent();
div.parent();
div.parent;
```

## Resources

* [Rule source](/src/rules/no-parent.js)
* [Test source](/src/tests/no-parent.js)
