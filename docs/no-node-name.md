# no-node-name

Disallows the $.nodeName utility.

## Rule details

✗ The following patterns are considered errors:
```js
$.nodeName();
```

✓ The following patterns are not considered errors:
```js
nodeName();
myClass.nodeName();
$div.nodeName();
```
