# no-ajax

Disallows the [`$.ajax`](https://api.jquery.com/jQuery.ajax/)/[`$.get`](https://api.jquery.com/jQuery.get/)/[`$.getJSON`](https://api.jquery.com/jQuery.getJSON/)/[`$.getScript`](https://api.jquery.com/jQuery.getScript/)/[`$.post`](https://api.jquery.com/jQuery.post/) utilies. Prefer `Window.fetch`.

This rule is enabled in `plugin:no-jquery/slim`.

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

## Resources

* [Rule source](/src/rules/no-ajax.js)
* [Test source](/src/tests/no-ajax.js)
