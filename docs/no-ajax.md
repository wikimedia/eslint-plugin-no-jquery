# no-ajax

Disallows the $.ajax/get/getJSON/getScript/post utilies.

## Rule details

❌ The following patterns are considered errors:
```js
$.ajax();
$.get();
$.getJSON();
$.getScript();
$.post();
```

✔️ The following patterns are not considered errors:
```js
ajax();
div.ajax();
div.ajax;
get();
div.get();
div.get;
getJSON();
div.getJSON();
div.getJSON;
getScript();
div.getScript();
div.getScript;
post();
div.post();
div.post;
```
## Rule source

* [rules/no-ajax.js](../rules/no-ajax.js)
