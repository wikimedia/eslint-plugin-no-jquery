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

## Resources

* [Rule source](/src/rules/no-css.js)
* [Test source](/src/tests/no-css.js)
