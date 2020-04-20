# no-size

Disallows the [`.size`](https://api.jquery.com/size/) method. Prefer `.length`.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).size();
$div.size();
$( 'div' ).first().size();
$( 'div' ).append( $( 'input' ).size() );
```

✔️ The following patterns are not considered errors:
```js
size();
[].size();
div.size();
div.size;
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$( 'div' ).size();                        /* → */ $( 'div' ).length;
$div.size();                              /* → */ $div.length;
$( 'div' ).first().size();                /* → */ $( 'div' ).first().length;
$( 'div' ).append( $( 'input' ).size() ); /* → */ $( 'div' ).append( $( 'input' ).length );
```
## Rule source

* [rules/no-size.js](../src/rules/no-size.js)
