# no-class-state

Disallows .hasClass and .toggleClass to discourage querying the DOM for state information. .toggleClass may be used with a boolean argument as then in behave like .addClass/.removeClass.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).hasClass();
$div.hasClass();
$( 'div' ).first().hasClass();
$( 'div' ).append( $( 'input' ).hasClass() );
$( 'div' ).toggleClass( 'myClass' );
$div.toggleClass( 'myClass' );
$( 'div' ).first().toggleClass( 'myClass' );
$( 'div' ).append( $( 'input' ).toggleClass( 'myClass' ) );
```

✔️ The following patterns are not considered errors:
```js
hasClass();
[].hasClass();
div.hasClass();
div.hasClass;
toggleClass();
[].toggleClass();
div.toggleClass();
div.toggleClass;
$div.toggleClass( 'myClass', true );
$div.toggleClass( 'myClass', false );
```
## Rule source

* [rules/no-class-state.js](../rules/no-class-state.js)
