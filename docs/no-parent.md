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

## Rule source

* [src/rules/no-parent.js](/src/rules/no-parent.js)
