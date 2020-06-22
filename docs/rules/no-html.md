# no-html

Disallows the [`.html`](https://api.jquery.com/html/) method. Prefer `Element#innerHTML`.

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

## Resources

* [Rule source](/src/rules/no-html.js)
* [Test source](/src/tests/no-html.js)
