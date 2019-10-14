# no-and-self

Disallows the .andSelf method. Prefer $.addBack to $.andSelf.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).andSelf( '.foo' );
$div.andSelf();
$( 'div' ).first().andSelf();
$( 'div' ).append( $( 'input' ).andSelf() );
```

✔️ The following patterns are not considered errors:
```js
andSelf();
[].andSelf();
div.andSelf();
div.andSelf;
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$( 'div' ).andSelf( '.foo' ); /* → */ $( 'div' ).addBack( '.foo' );
$( 'div' ).first().andSelf(); /* → */ $( 'div' ).first().addBack();
```
## Rule source

* [rules/no-and-self.js](../rules/no-and-self.js)
