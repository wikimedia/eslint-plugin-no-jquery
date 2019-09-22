# no-text

Disallows the .text method and $.text utility. Prefer Node#textContent to $.text.

## Rule details

✗ The following patterns are considered errors:
```js
$.text();
$( 'div' ).text();
$div.text();
$( 'div' ).first().text();
$( 'div' ).append( $( 'input' ).text() );
```

✓ The following patterns are not considered errors:
```js
text();
[].text();
div.text();
div.text;
```
