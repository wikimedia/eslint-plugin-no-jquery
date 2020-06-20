# no-css

Disallows the [`.css`](https://api.jquery.com/css/) method and `$.css` utility. Prefer `Window#getComputedStyle`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.css();
$( 'div' ).css();
$div.css();
$( 'div' ).first().css();
$( 'div' ).append( $( 'input' ).css() );
```

✔️ Examples of **correct** code:
```js
css();
[].css();
div.css();
div.css;
```

## Resources

* [Rule source](/src/rules/no-css.js)
* [Test source](/src/tests/no-css.js)
