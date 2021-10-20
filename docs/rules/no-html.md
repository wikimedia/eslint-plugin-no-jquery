# no-html

Disallows the [`.html`](https://api.jquery.com/html/) method. Prefer `Element#innerHTML`.

Using this method only as a getter or a setter can be allowed using the `allowGetOrSet` option:
* `"none"` (default) the method can't be used at all
* `"get"` the method can only be used as a getter i.e. with no arguments
* `"set"` the method can only be used as a setter i.e. with arguments

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).html();
$div.html();
$( 'div' ).first().html();
$( 'div' ).append( $( 'input' ).html() );
```

✔️ Examples of **correct** code:
```js
html();
[].html();
div.html();
div.html;
```

❌ Examples of **incorrect** code with `[{"allowGetOrSet":"get"}]` options:
```js
$div.html( '<br>' );
```

✔️ Examples of **correct** code with `[{"allowGetOrSet":"get"}]` options:
```js
$div.html();
```

❌ Examples of **incorrect** code with `[{"allowGetOrSet":"set"}]` options:
```js
$div.html();
```

✔️ Examples of **correct** code with `[{"allowGetOrSet":"set"}]` options:
```js
$div.html( '<br>' );
```

## Resources

* [Rule source](/src/rules/no-html.js)
* [Test source](/tests/rules/no-html.js)
