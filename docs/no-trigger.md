# no-trigger

Disallows the [`.trigger`](https://api.jquery.com/trigger/) method. Prefer `EventTarget#dispatchEvent`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).trigger();
$div.trigger();
$( 'div' ).first().trigger();
$( 'div' ).append( $( 'input' ).trigger() );
```

✔️ The following patterns are not considered errors:
```js
trigger();
[].trigger();
div.trigger();
div.trigger;
```
## Rule source

* [rules/no-trigger.js](../src/rules/no-trigger.js)
