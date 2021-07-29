# no-ajax

Disallows the [`$.ajax`](https://api.jquery.com/jQuery.ajax/)/[`$.get`](https://api.jquery.com/jQuery.get/)/[`$.getJSON`](https://api.jquery.com/jQuery.getJSON/)/[`$.getScript`](https://api.jquery.com/jQuery.getScript/)/[`$.post`](https://api.jquery.com/jQuery.post/) utilies. Prefer `Window.fetch`.

⚙️ This rule is enabled in `plugin:no-jquery/slim`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.ajax();
$.get();
$.getJSON();
$.getScript();
$.post();
```

✔️ Examples of **correct** code:
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
* [Test source](/tests/rules/no-ajax.js)
