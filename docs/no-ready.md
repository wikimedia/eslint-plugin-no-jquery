# no-ready

Disallows the document ready event, either `$( function() {} )` or `$( document ).ready()`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( function () { } );
$( function init() { } );
$( () => {} );
$( document ).ready( function () { } );
$().ready( function () { } );
$( 'img' ).ready( function () { } );
$div.ready( function () { } );
$( 'img' ).first().ready( function () { } );
```

✔️ Examples of **correct** code:
```js
ready( function () { } );
ready( ()=>{} );
ready();
[].ready();
div.ready();
div.ready;
$.ready();
$( 'div' );
$( document );
$();
```

## Resources

* [Rule source](/src/rules/no-ready.js)
* [Test source](/src/tests/no-ready.js)
