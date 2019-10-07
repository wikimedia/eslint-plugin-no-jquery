# no-variable-name

Disallows variable names which don't match `variablePattern` in settings (by default a `$`-prefix).

## Rule details

❌ The following patterns are considered errors:
```js
var div = $( '<div>' );
foo.div = $( '<div>' );
$foo.div = $( '<div>' );
$foo[ 3 ] = $( '<div>' );
$foo.$div.bar = $( '<div>' );
div = $div.data( 'foo', 'bar' );
div = $div.data( { foo: 'bar' } );
div = $div.outerWidth( 30 );
div = $div.outerWidth( function () {} );
div = $div.outerWidth( number, true );
```

✔️ The following patterns are not considered errors:
```js
var $div = $( '<div>' );
$div = $( '<div>' );
foo.$div = $( '<div>' );
foo.bar.$div = $( '<div>' );
text = $( '<div>' ).text();
data = $( '<div>' ).data( 'foo' );
data = $( '<div>' ).data( objectOrString );
data = $.data( $div, 'foo' );
deferred = $.Deferred();
list = $.map( [], fn );
width = $div.outerWidth();
width = $div.outerWidth( true );
width = $div.outerWidth( numberOrBool );
$foo.text = $( '<div>' ).text();
var foo = $.extend( {}, {} );
foo.bar = $.extend( {}, {} );
```
✔️ With `{"no-jquery":{"variablePattern":"^\\$.|^element$"}}` settings:
```js
this.element = $( '<div>' );
```
