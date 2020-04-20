# no-submit

Disallows the [`.submit`](https://api.jquery.com/submit/) method. Prefer `EventTarget#dispatchEvent` + `HTMLFormElement#submit`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'form' ).submit();
$form.submit();
$( 'form' ).first().submit();
$( 'form' ).append( $( 'input' ).submit() );
```

✔️ The following patterns are not considered errors:
```js
submit();
[].submit();
form.submit();
form.submit;
```
## Rule source

* [rules/no-submit.js](../src/rules/no-submit.js)
