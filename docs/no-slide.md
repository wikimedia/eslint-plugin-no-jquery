# no-slide

Disallows the [`.slideDown`](https://api.jquery.com/slideDown/)/[`.slideToggle`](https://api.jquery.com/slideToggle/)/[`.slideUp`](https://api.jquery.com/slideUp/) methods. Prefer CSS transitions.

This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).slideDown();
$div.slideDown();
$( 'div' ).first().slideDown();
$( 'div' ).append( $( 'input' ).slideDown() );
$( 'div' ).slideToggle();
$div.slideToggle();
$( 'div' ).first().slideToggle();
$( 'div' ).append( $( 'input' ).slideToggle() );
$( 'div' ).slideUp();
$div.slideUp();
$( 'div' ).first().slideUp();
$( 'div' ).append( $( 'input' ).slideUp() );
```

✔️ The following patterns are not considered errors:
```js
slideDown();
[].slideDown();
div.slideDown();
div.slideDown;
slideToggle();
[].slideToggle();
div.slideToggle();
div.slideToggle;
slideUp();
[].slideUp();
div.slideUp();
div.slideUp;
```
## Rule source

* [rules/no-slide.js](../src/rules/no-slide.js)
