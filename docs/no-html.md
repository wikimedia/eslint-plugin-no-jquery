# no-html

Disallows the [`.html`](https://api.jquery.com/html/) method. Prefer `Element#innerHTML`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).html();
$div.html();
$( 'div' ).first().html();
$( 'div' ).append( $( 'input' ).html() );
```

✔️ The following patterns are not considered errors:
```js
html();
[].html();
div.html();
div.html;
```
## Rule source

* [rules/no-html.js](../src/rules/no-html.js)
