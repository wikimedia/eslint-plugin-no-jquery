# variable-pattern

Disallows variable names which don't match `variablePattern` in settings (by default a `$`-prefix).

## Rule details

❌ The following patterns are considered errors:
```js
var div = $( '<div>' );
foo.div = $( '<div>' );
$foo.div = $( '<div>' );
$foo.$div.bar = $( '<div>' );
div = $div.height( value );
div = $div.html( value );
div = $div.innerHeight( value );
div = $div.innerWidth( value );
div = $div.offset( value );
div = $div.scrollLeft( value );
div = $div.scrollTop( value );
div = $div.text( value );
div = $div.val( value );
div = $div.width( value );
div = $div.attr( 'name', 'value' );
div = $div.attr( { name: 'value' } );
div = $div.attr( { name: fn } );
div = $div.css( 'name', 'value' );
div = $div.css( { name: 'value' } );
div = $div.css( { name: fn } );
div = $div.data( 'name', 'value' );
div = $div.data( { name: 'value' } );
div = $div.data( { name: fn } );
div = $div.prop( 'name', 'value' );
div = $div.prop( { name: 'value' } );
div = $div.prop( { name: fn } );
div = $div.outerWidth( 30 );
number = $div.outerWidth( 30, true );
number = $div.outerWidth( mustBeNumber, true );
div = $div.outerWidth( function () { return 30; } );
div = $div.outerHeight( 30 );
number = $div.outerHeight( 30, true );
number = $div.outerHeight( mustBeNumber, true );
div = $div.outerHeight( function () { return 30; } );
list = $div.queue( newQueueOrCallBack );
list = $div.queue( [] );
div = $div.queue( 'fx', newQueueOrCallBack );
div = $div.stop();
div = $div.stop( true );
div = $div.stop( true, true );
```
❌ With `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"always"}}}` settings:
```js
div = $( '<div>' ).datePicker();
div = $( '<div>' ).datePicker( options );
```
❌ With `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"accessor"}}}` settings:
```js
div = $( '<div>' ).datePicker( options );
```
❌ With `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"valueAccessor"}}}` settings:
```js
div = $( '<div>' ).datePicker( 'name', newPicker );
```

✔️ The following patterns are not considered errors:
```js
var $div = $( '<div>' );
$div = $( '<div>' );
foo.$div = $( '<div>' );
foo.bar.$div = $( '<div>' );
foo[ unknownName ] = $( '<div>' );
foo[ $unknownName ] = $( '<div>' );
$foo[ unknownName ] = $( '<div>' );
$foo[ $unknownName ] = $( '<div>' );
$foo.text = $( '<div>' ).text();
foo[ 3 ] = $( '<div>' );
deferred = $.Deferred();
var foo = $.extend( {}, {} );
foo.bar = $.extend( {}, {} );
number = $div.height();
string = $div.html();
number = $div.innerHeight();
number = $div.innerWidth();
obj = $div.offset();
number = $div.scrollLeft();
number = $div.scrollTop();
string = $div.text();
mixed = $div.val();
number = $div.width();
list = $div.get();
node = $div.get( 1 );
bool = $div.hasClass( 'foo' );
obj = $div.position();
promise = $div.promise();
promise = $div.promise( 'fx' );
promise = $div.promise( 'fx', obj );
string = $div.serialize();
list = $div.serializeArray();
list = $div.toArray();
obj = $div.triggerHandler( 'click' );
obj = $div.triggerHandler( 'click', params );
obj = $div.triggerHandler( e, params );
number = $div.index();
number = $div.index( '.foo' );
number = $div.index( element );
bool = $div.is( '.foo' );
bool = $div.is( $div );
string = $div.attr( 'name' );
string = $div.attr( possibleName );
string = $div.css( 'name' );
string = $div.css( possibleName );
string = $div.data( 'name' );
string = $div.data( possibleName );
obj = $div.data();
string = $div.prop( 'name' );
string = $div.prop( possibleName );
number = $div.outerWidth();
number = $div.outerWidth( true );
number = $div.outerWidth( possibleBool );
number = $div.outerHeight();
number = $div.outerHeight( true );
number = $div.outerHeight( possibleBool );
list = $div.queue();
list = $div.queue( 'fx' );
val = $div.unknownPlugin();
val = $div.unknownPlugin( arg1 );
val = $div.unknownPlugin( arg1, arg2 );
```
✔️ With `{"no-jquery":{"variablePattern":"^\\$.|^element$"}}` settings:
```js
this.element = $( '<div>' );
```
✔️ With `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"accessor"}}}` settings:
```js
obj = $( '<div>' ).datePicker();
```
✔️ With `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"valueAccessor"}}}` settings:
```js
obj = $( '<div>' ).datePicker( 'name' );
```
✔️ With `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"never"}}}` settings:
```js
obj = $( '<div>' ).datePicker( 'name', options );
```
## Rule source

* [rules/variable-pattern.js](../src/rules/variable-pattern.js)
