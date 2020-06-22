# no-live

Disallows the [`.live`](https://api.jquery.com/live/)/[`.die`](https://api.jquery.com/die/) methods. Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).live();
$div.live();
$( 'div' ).first().live();
$( 'div' ).append( $( 'input' ).live() );
$( 'div' ).die();
$div.die();
$( 'div' ).first().die();
$( 'div' ).append( $( 'input' ).die() );
```

✔️ Examples of **correct** code:
```js
live();
[].live();
div.live();
div.live;
die();
[].die();
div.die();
div.die;
```

## Resources

* [Rule source](/src/rules/no-live.js)
* [Test source](/src/tests/no-live.js)
