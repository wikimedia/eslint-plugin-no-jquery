[//]: # (This file is generated by eslint-docgen. Do not edit it directly.)

# no-trigger

Disallows the [`.trigger`](https://api.jquery.com/trigger/) method. Prefer `EventTarget#dispatchEvent`.

📋 This rule is enabled in `plugin:no-jquery/all`.

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
* [Test source](/tests/rules/no-trigger.js)
