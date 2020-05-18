# no-text

Disallows the [`.text`](https://api.jquery.com/text/) method and `$.text` utility. Prefer `Node#textContent`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.text();
$( 'div' ).text();
$div.text();
$( 'div' ).first().text();
$( 'div' ).append( $( 'input' ).text() );
```

✔️ Examples of **correct** code:
```js
text();
[].text();
div.text();
div.text;
```

## Resources

* [Rule source](/src/rules/no-text.js)
* [Test source](/src/tests/no-text.js)
