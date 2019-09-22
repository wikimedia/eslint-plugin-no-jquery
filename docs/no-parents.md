# no-parents

Disallows the .parents method. Prefer Element#closest to $.parents.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).parents();
$div.parents();
$( 'div' ).first().parents();
$( 'div' ).append( $( 'input' ).parents() );
```

✓ The following patterns are not considered errors:
```js
parents();
[].parents();
div.parents();
div.parents;
```
