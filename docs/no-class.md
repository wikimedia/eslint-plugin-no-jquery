# no-class

Disallows the .addClass/hasClass/removeClass/toggleClass methods.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).addClass();
$div.addClass();
$( 'div' ).first().addClass();
$( 'div' ).append( $( 'input' ).addClass() );
$( 'div' ).hasClass();
$div.hasClass();
$( 'div' ).first().hasClass();
$( 'div' ).append( $( 'input' ).hasClass() );
$( 'div' ).removeClass();
$div.removeClass();
$( 'div' ).first().removeClass();
$( 'div' ).append( $( 'input' ).removeClass() );
$( 'div' ).toggleClass();
$div.toggleClass();
$( 'div' ).first().toggleClass();
$( 'div' ).append( $( 'input' ).toggleClass() );
```

✔️ The following patterns are not considered errors:
```js
addClass();
[].addClass();
div.addClass();
div.addClass;
hasClass();
[].hasClass();
div.hasClass();
div.hasClass;
removeClass();
[].removeClass();
div.removeClass();
div.removeClass;
toggleClass();
[].toggleClass();
div.toggleClass();
div.toggleClass;
```
## Rule source

* [rules/no-class.js](../rules/no-class.js)
