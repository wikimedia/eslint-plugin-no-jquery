# no-class

Disallows the [`.addClass`](https://api.jquery.com/addClass/)/[`.hasClass`](https://api.jquery.com/hasClass/)/[`.removeClass`](https://api.jquery.com/removeClass/)/[`.toggleClass`](https://api.jquery.com/toggleClass/) methods. Prefer `Element#classList`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
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

✔️ Examples of **correct** code:
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

## Resources

* [Rule source](/src/rules/no-class.js)
* [Test source](/tests/rules/no-class.js)
