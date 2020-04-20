# no-animate

Disallows the [`.animate`](https://api.jquery.com/animate/) method. Use the `allowScroll` option to allow animations which are just used for scrolling. Prefer CSS transitions.

This rule is enabled in `plugin:no-jquery/slim`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).animate();
$div.animate();
$( 'div' ).first().animate();
$( 'div' ).append( $( 'input' ).animate() );
$div.animate( { scrollTop: 100 } );
$div.animate( { scrollLeft: 200 } );
$div.animate( { scrollTop: 100, scrollLeft: 200 } );
$div.animate( { scrollTop: 100, width: 300 } );
```
❌ With `[{"allowScroll":false}]` options:
```js
$div.animate( { scrollTop: 100 } );
```
❌ With `[{"allowScroll":true}]` options:
```js
$div.animate( { scrollTop: 100, width: 300 } );
```

✔️ The following patterns are not considered errors:
```js
animate();
[].animate();
div.animate();
div.animate;
```
✔️ With `[{"allowScroll":true}]` options:
```js
$div.animate( { scrollTop: 100 } );
$div.animate( { scrollLeft: 200 } );
$div.animate( { scrollTop: 100, scrollLeft: 200 } );
```
## Rule source

* [rules/no-animate.js](../src/rules/no-animate.js)
