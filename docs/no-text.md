# no-text

Disallows the [`.text`](https://api.jquery.com/text/) method and `$.text` utility. Prefer `Node#textContent` to `$.text`.

## Rule details

❌ The following patterns are considered errors:
```js
$.text();
$( 'div' ).text();
$div.text();
$( 'div' ).first().text();
$( 'div' ).append( $( 'input' ).text() );
```

✔️ The following patterns are not considered errors:
```js
text();
[].text();
div.text();
div.text;
```
## Rule source

* [rules/no-text.js](../rules/no-text.js)
