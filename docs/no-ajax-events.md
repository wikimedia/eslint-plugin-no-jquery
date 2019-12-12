# no-ajax-events

Disallows global ajax events handlers: `ajaxStart`/`ajaxSend`/`ajaxSuccess`/`ajaxError`/`ajaxComplete`/`ajaxStop`. Prefer local events.

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

* [rules/no-ajax-events.js](../rules/no-ajax-events.js)
