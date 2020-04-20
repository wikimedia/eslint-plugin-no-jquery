# no-parents

Disallows the [`.parents`](https://api.jquery.com/parents/) method. Prefer `Element#closest`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).parents();
$div.parents();
$( 'div' ).first().parents();
$( 'div' ).append( $( 'input' ).parents() );
```

✔️ The following patterns are not considered errors:
```js
parents();
[].parents();
div.parents();
div.parents;
```
## Rule source

* [rules/no-parents.js](../src/rules/no-parents.js)
