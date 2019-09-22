# no-css

Disallows the .css method. Prefer Window#getComputedStyle to $.css.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).css();
$div.css();
$( 'div' ).first().css();
$( 'div' ).append( $( 'input' ).css() );
```

✓ The following patterns are not considered errors:
```js
css();
[].css();
div.css();
div.css;
```
