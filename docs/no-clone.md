# no-clone

Disallows the [`.clone`](https://api.jquery.com/clone/) method and `$.clone` utility. Prefer `Node#cloneNode`.

## Rule details

❌ The following patterns are considered errors:
```js
$.clone();
$( 'div' ).clone();
$div.clone();
this.prop.$div.clone();
$( 'div' ).first().clone();
$( 'div' ).append( $( 'input' ).clone() );
```

✔️ The following patterns are not considered errors:
```js
clone();
[].clone();
div.clone();
div.clone;
$div.prop.clone();
$div.prop.clone();
$div[ 0 ].clone();
```

## Resources

* [Rule source](/src/rules/no-clone.js)
* [Test source](/src/tests/no-clone.js)
