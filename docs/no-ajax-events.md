# no-ajax-events

Disallows global ajax events handlers: [`.ajaxStart`](https://api.jquery.com/ajaxStart/)/[`.ajaxSend`](https://api.jquery.com/ajaxSend/)/[`.ajaxSuccess`](https://api.jquery.com/ajaxSuccess/)/[`.ajaxError`](https://api.jquery.com/ajaxError/)/[`.ajaxComplete`](https://api.jquery.com/ajaxComplete/)/[`.ajaxStop`](https://api.jquery.com/ajaxStop/). Prefer local events.

This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ The following patterns are considered errors:
```js
$( document ).on( 'ajaxSend', function ( e ) { } );
$( document ).on( 'ajaxSuccess', function ( e ) { } );
$form.on( 'ajaxError', function ( e ) { } );
$form.on( 'ajaxComplete', function ( e ) { } );
$form.on( 'ajaxStart', function ( e ) { } );
$form.on( 'ajaxStop', function ( e ) { } );
$( document ).ajaxSend( function ( e ) { } );
$( document ).ajaxSuccess( function ( e ) { } );
$form.ajaxError( function ( e ) { } );
$form.ajaxComplete( function ( e ) { } );
$form.ajaxStart( function ( e ) { } );
$form.ajaxStop( function ( e ) { } );
```

✔️ The following patterns are not considered errors:
```js
$( document ).on( 'click', function ( e ) { } );
$form.on( 'submit', function ( e ) { } );
$form.on();
on( 'ajaxSuccess', '.js-select-menu', function ( e ) { } );
form.on( 'ajaxSend' );
form.ajaxSend();
$.ajaxSend();
```

## Rule source

* [src/rules/no-ajax-events.js](/src/rules/no-ajax-events.js)
