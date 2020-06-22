# no-size

Disallows the [`.size`](https://api.jquery.com/size/) method. Prefer `.length`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).size();
$div.size();
$( 'div' ).first().size();
$( 'div' ).append( $( 'input' ).size() );
```

✔️ Examples of **correct** code:
```js
size();
[].size();
div.size();
div.size;
```

🔧 Examples of code **fixed** by this rule:
```js
$( 'div' ).size();                        /* → */ $( 'div' ).length;
$div.size();                              /* → */ $div.length;
$( 'div' ).first().size();                /* → */ $( 'div' ).first().length;
$( 'div' ).append( $( 'input' ).size() ); /* → */ $( 'div' ).append( $( 'input' ).length );
```

## Resources

* [Rule source](/src/rules/no-size.js)
* [Test source](/src/tests/no-size.js)
