# no-extend

Disallows the [`$.extend`](https://api.jquery.com/jQuery.extend/) utility. Prefer `Object.assign` or the spread operator.

## Rule details

❌ The following patterns are considered errors:
```js
$.extend( {}, foo );
$.extend( true, {}, foo );
```
❌ With `[{"allowDeep":true}]` options:
```js
$.extend( {}, foo );
```

✔️ The following patterns are not considered errors:
```js
extend();
myMethod.extend();
myMethod.extend;
```
✔️ With `[{"allowDeep":true}]` options:
```js
$.extend( true, {}, foo );
```
## Rule source

* [src/rules/no-extend.js](/src/rules/no-extend.js)
