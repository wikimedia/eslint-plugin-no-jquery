# no-html

Disallows the .html method. Prefer Element#innerHTML to $.html.

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
