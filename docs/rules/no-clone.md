# no-clone

Disallows the [`.clone`](https://api.jquery.com/clone/) method and `$.clone` utility. Prefer `Node#cloneNode`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.clone();
$( 'div' ).clone();
$div.clone();
this.prop.$div.clone();
$( 'div' ).first().clone();
$( 'div' ).append( $( 'input' ).clone() );
```

✔️ Examples of **correct** code:
```js
clone();
[].clone();
div.clone();
div.clone;
$div.prop.clone();
$div[ 0 ].clone();
```

## Resources

* [Rule source](/src/rules/no-clone.js)
* [Test source](/tests/rules/no-clone.js)
