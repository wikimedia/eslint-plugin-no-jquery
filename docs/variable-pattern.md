# variable-pattern

Disallows variable names which don't match `variablePattern` in settings (by default a `$`-prefix).

## Rule details

❌ Examples of **incorrect** code:
```js
var div = $( '<div>' );
foo.div = $( '<div>' );
$foo.div = $( '<div>' );
$foo.$div.bar = $( '<div>' );
div = $div.height( value );
div = $div.html( value );
div = $div.offset( value );
div = $div.val( value );
div = $div.attr( 'name', 'value' );
div = $div.attr( { name: 'value' } );
div = $div.attr( { name: fn } );
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

❌ Examples of **incorrect** code with `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"always"}}}` settings:
```js
div = $( '<div>' ).datePicker();
div = $( '<div>' ).datePicker( options );
```

❌ Examples of **incorrect** code with `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"accessor"}}}` settings:
```js
div = $( '<div>' ).datePicker( options );
```

❌ Examples of **incorrect** code with `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"valueAccessor"}}}` settings:
```js
div = $( '<div>' ).datePicker( 'name', newPicker );
```

✔️ Examples of **correct** code:
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
obj = $div.offset();
mixed = $div.val();
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
obj = $div.data();
string = $div.prop( 'name' );
string = $div.prop( possibleName );
number = $div.outerWidth();
number = $div.outerWidth( true );
number = $div.outerWidth( possibleBool );
list = $div.queue();
list = $div.queue( 'fx' );
val = $div.unknownPlugin();
val = $div.unknownPlugin( arg1 );
val = $div.unknownPlugin( arg1, arg2 );
```

✔️ Examples of **correct** code with `{"no-jquery":{"variablePattern":"^\\$.|^element$"}}` settings:
```js
this.element = $( '<div>' );
```

✔️ Examples of **correct** code with `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"accessor"}}}` settings:
```js
obj = $( '<div>' ).datePicker();
```

✔️ Examples of **correct** code with `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"valueAccessor"}}}` settings:
```js
obj = $( '<div>' ).datePicker( 'name' );
```

✔️ Examples of **correct** code with `{"no-jquery":{"collectionReturningPlugins":{"datePicker":"never"}}}` settings:
```js
obj = $( '<div>' ).datePicker( 'name', options );
```

## Resources

* [Rule source](/src/rules/variable-pattern.js)
* [Test source](/src/tests/variable-pattern.js)
