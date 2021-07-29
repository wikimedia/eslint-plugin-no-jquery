# no-parents

Disallows the [`.parents`](https://api.jquery.com/parents/) method. Prefer `Element#closest`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).parents();
$div.parents();
$( 'div' ).first().parents();
$( 'div' ).append( $( 'input' ).parents() );
```

✔️ Examples of **correct** code:
```js
parents();
[].parents();
div.parents();
div.parents;
```

## Resources

* [Rule source](/src/rules/no-parents.js)
* [Test source](/tests/rules/no-parents.js)
