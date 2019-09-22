# no-box-model

Disallows the $.boxModel property.

## Rule details

✗ The following patterns are considered errors:
```js
$.boxModel;
$.boxModel.style;
```

✓ The following patterns are not considered errors:
```js
boxModel;
a.boxModel;
boxModel.foo;
a.boxModel.foo;
```
