# no-camel-case

Disallows the $.camelCase utility.

## Rule details

✗ The following patterns are considered errors:
```js
$.camelCase();
```

✓ The following patterns are not considered errors:
```js
camelCase();
myClass.camelCase();
$div.camelCase();
```
