# no-append-html

Disallows using [`.append`](https://api.jquery.com/append/)/[`.prepend`](https://api.jquery.com/prepend/)/[`.before`](https://api.jquery.com/before/)/[`.after`](https://api.jquery.com/after/)/[`.replaceWith`](https://api.jquery.com/replaceWith/) to inject HTML, in order to prevent possible XSS bugs.

## Rule details

❌ Examples of **incorrect** code:
```js
$div.append( '<xss>' );
$div.prepend( '<xss>' );
$div.before( '<xss>' );
$div.after( '<xss>' );
$div.replaceWith( '<xss>' );
$div.append( code + '<xss>' );
$div.append( test ? $el : '<xss>' );
$div.append( $el, '<xss>' );
$div.append( this.$el.someProp );
$div.append( userInput );
$div.append( getSomething() );
```

✔️ Examples of **correct** code:
```js
$div.append( $el );
$div.prepend( $el );
$div.before( $el );
$div.after( $el );
$div.replaceWith( $el );
$div.append( this.$el );
$div.append( this.foo.$el );
$div.append( $el1, $el2 );
$div.append( $el1, ' ', $el2 );
$div.append( $el1, ' \n\t ', $el2 );
$div.append( $el.parent() );
$div.append( test ? $el1 : $el2 );
$div.append( test ? $el1 : null );
$div.append( test ? $el1 : undefined );
$div.append( test ? $el1 : '' );

$el = getSomething();
$div.append( $el );
```

## Resources

* [Rule source](/src/rules/no-append-html.js)
* [Test source](/tests/rules/no-append-html.js)
