# no-submit

Disallows the .submit method. Prefer EventTarget#dispatchEvent + form.submit() to $.submit.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'form' ).submit();
$form.submit();
$( 'form' ).first().submit();
$( 'form' ).append( $( 'input' ).submit() );
```

✓ The following patterns are not considered errors:
```js
submit();
[].submit();
form.submit();
form.submit;
```
