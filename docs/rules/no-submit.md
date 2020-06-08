# no-submit

Disallows the [`.submit`](https://api.jquery.com/submit/) method. Prefer `EventTarget#dispatchEvent` + `HTMLFormElement#submit`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'form' ).submit();
$form.submit();
$( 'form' ).first().submit();
$( 'form' ).append( $( 'input' ).submit() );
```

✔️ Examples of **correct** code:
```js
submit();
[].submit();
form.submit();
form.submit;
```

## Resources

* [Rule source](/src/rules/no-submit.js)
* [Test source](/src/tests/no-submit.js)
