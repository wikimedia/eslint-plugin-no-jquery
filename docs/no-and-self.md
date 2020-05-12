# no-and-self

Disallows the [`.andSelf`](https://api.jquery.com/andSelf/) method. Prefer `.addBack`.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).andSelf( '.foo' );
$div.andSelf( '.foo' );
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
$div.andSelf( '.foo' );       /* → */ $div.addBack( '.foo' );
$( 'div' ).first().andSelf(); /* → */ $( 'div' ).first().addBack();
```
## Rule source

* [src/rules/no-and-self.js](/src/rules/no-and-self.js)
