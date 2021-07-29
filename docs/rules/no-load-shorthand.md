# no-load-shorthand

Disallows the [`.load`](https://api.jquery.com/load-event/) method when used as a shorthand for `.on( 'load', function )` or `.trigger( 'load' )`. Prefer `.on` or `.trigger`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).load( function () {} );
$div.load( function () {} );
$div.load();
$div.load( () => {} );
$( 'div' ).first().load( function () {} );
$( 'div' ).append( $( 'input' ).load( function () {} ) );
```

✔️ Examples of **correct** code:
```js
load();
[].load();
div.load();
div.load;
$.load();
$div.load( 'url' );
$div.load( couldBeUrl );
```

🔧 Examples of code **fixed** by this rule:
```js
$( 'div' ).load( function () {} );                        /* → */ $( 'div' ).on( 'load', function () {} );
$div.load( function () {} );                              /* → */ $div.on( 'load', function () {} );
$div.load();                                              /* → */ $div.trigger( 'load' );
$div.load( () => {} );                                    /* → */ $div.on( 'load', () => {} );
$( 'div' ).first().load( function () {} );                /* → */ $( 'div' ).first().on( 'load', function () {} );
$( 'div' ).append( $( 'input' ).load( function () {} ) ); /* → */ $( 'div' ).append( $( 'input' ).on( 'load', function () {} ) );
```

## Resources

* [Rule source](/src/rules/no-load-shorthand.js)
* [Test source](/tests/rules/no-load-shorthand.js)
