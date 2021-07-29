# no-and-self

Disallows the [`.andSelf`](https://api.jquery.com/andSelf/) method. Prefer `.addBack`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).andSelf( '.foo' );
$div.andSelf( '.foo' );
$( 'div' ).first().andSelf();
$( 'div' ).append( $( 'input' ).andSelf() );
```

✔️ Examples of **correct** code:
```js
andSelf();
[].andSelf();
div.andSelf();
div.andSelf;
```

🔧 Examples of code **fixed** by this rule:
```js
$( 'div' ).andSelf( '.foo' );                /* → */ $( 'div' ).addBack( '.foo' );
$div.andSelf( '.foo' );                      /* → */ $div.addBack( '.foo' );
$( 'div' ).first().andSelf();                /* → */ $( 'div' ).first().addBack();
$( 'div' ).append( $( 'input' ).andSelf() ); /* → */ $( 'div' ).append( $( 'input' ).addBack() );
```

## Resources

* [Rule source](/src/rules/no-and-self.js)
* [Test source](/tests/rules/no-and-self.js)
