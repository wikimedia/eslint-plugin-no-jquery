# no-and-self

Disallows the .andSelf method. Prefer $.addBack to $.andSelf.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).andSelf();
$div.andSelf();
$( 'div' ).first().andSelf();
$( 'div' ).append( $( 'input' ).andSelf() );
```

✓ The following patterns are not considered errors:
```js
andSelf();
[].andSelf();
div.andSelf();
div.andSelf;
```
