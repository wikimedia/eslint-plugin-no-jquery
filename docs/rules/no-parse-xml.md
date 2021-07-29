# no-parse-xml

Disallows the [`$.parseXML`](https://api.jquery.com/jQuery.parseXML/) utility. Prefer `DOMParser#parseFromString`.

⚙️ This rule is enabled in `plugin:no-jquery/slim`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.parseXML( '<b>test</b>' );
```

✔️ Examples of **correct** code:
```js
parseXML( '<b>test</b>' );
'test'.parseXML( '<b>test</b>' );
'<b>test</b>'.parseXML;
```

🔧 Examples of code **fixed** by this rule:
```js
$.parseXML( '<b>test</b>' ); /* → */ ( new window.DOMParser() ).parseFromString( '<b>test</b>', 'text/xml' );
```

## Resources

* [Rule source](/src/rules/no-parse-xml.js)
* [Test source](/tests/rules/no-parse-xml.js)
