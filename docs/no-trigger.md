# no-trigger

Disallows the [`.trigger`](https://api.jquery.com/trigger/) method. Prefer `EventTarget#dispatchEvent`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).trigger();
$div.trigger();
$( 'div' ).first().trigger();
$( 'div' ).append( $( 'input' ).trigger() );
```

✔️ Examples of **correct** code:
```js
trigger();
[].trigger();
div.trigger();
div.trigger;
```

## Resources

* [Rule source](/src/rules/no-trigger.js)
* [Test source](/src/tests/no-trigger.js)
