# no-ready

Disallows the document ready event, either `$( function() {} )` or `$( document ).ready()`.

## Rule details

❌ The following patterns are considered errors:
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

✔️ The following patterns are not considered errors:
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
