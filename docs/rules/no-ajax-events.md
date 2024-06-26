[//]: # (This file is generated by eslint-docgen. Do not edit it directly.)

# no-ajax-events

Disallows global ajax events handlers: [`.ajaxComplete`](https://api.jquery.com/ajaxComplete/)/[`.ajaxError`](https://api.jquery.com/ajaxError/)/[`.ajaxSend`](https://api.jquery.com/ajaxSend/)/[`.ajaxStart`](https://api.jquery.com/ajaxStart/)/[`.ajaxStop`](https://api.jquery.com/ajaxStop/)/[`.ajaxSuccess`](https://api.jquery.com/ajaxSuccess/). Prefer local events.

📋 This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( document ).on( 'ajaxSend', fn );
$( document ).on( 'ajaxSuccess', fn );
$form.on( 'ajaxError', fn );
$form.on( 'ajaxComplete', fn );
$form.on( 'ajaxStart', fn );
$form.on( 'ajaxStop', fn );
$( document ).ajaxSend( fn );
$( document ).ajaxSuccess( fn );
$form.ajaxError( fn );
$form.ajaxComplete( fn );
$form.ajaxStart( fn );
$form.ajaxStop( fn );
```

✔️ Examples of **correct** code:
```js
$( document ).on( 'click', fn );
$form.on( 'submit', fn );
$form.on();
on( 'ajaxSuccess', '.js-select-menu', fn );
form.on( 'ajaxSend' );
form.ajaxSend();
$.ajaxSend();
```

## Resources

* [Rule source](/src/rules/no-ajax-events.js)
* [Test source](/tests/rules/no-ajax-events.js)
