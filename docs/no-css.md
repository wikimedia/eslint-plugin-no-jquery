# no-css

Disallows the [`.css`](https://api.jquery.com/css/) method and `$.css` utility. Prefer `Window#getComputedStyle`.

## Rule details

❌ The following patterns are considered errors:
```js
$.css();
$( 'div' ).css();
$div.css();
$( 'div' ).first().css();
$( 'div' ).append( $( 'input' ).css() );
```

✔️ The following patterns are not considered errors:
```js
css();
[].css();
div.css();
div.css;
```
## Rule source

* [rules/no-css.js](../src/rules/no-css.js)
