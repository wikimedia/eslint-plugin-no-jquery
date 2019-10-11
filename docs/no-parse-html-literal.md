# no-parse-html-literal

Disallows parsing of HTML literal strings using either the jQuery method $() or $.parseHTML. Single tags are still allowed for creating new nodes as these don't tirgger the HTML parser. DOM build and manipulation methods should be used instead.

The format of single tags can be specified using the `singleTagStyle` option:
* `"minimal"` (default) no whitespace or self-closing i.e. `<div>`
* `"self-closing"` no whitespace and self-closing i.e. `<div/>`
* `"any"` no style enforced


## Rule details

❌ The following patterns are considered errors:
```js
$( '<div>contents</div>' );
$( '<div attr=val>' );
$( '<div attr=val />' );
$( '<div>' + 'content' + '</div>' );
$div.html( '<div>contents</div>' );
$div.html( '<div attr=val>' );
$div.html( '<div attr=val />' );
$div.html( '<div>' + 'content' + '</div>' );
$div.append( '<div>contents</div>' );
$div.append( '<div attr=val>' );
$div.append( '<div attr=val />' );
$div.append( '<div>' + 'content' + '</div>' );
$div.add( '<div>contents</div>' );
$div.add( '<div attr=val>' );
$div.add( '<div attr=val />' );
$div.add( '<div>' + 'content' + '</div>' );
$.parseHTML( '<div>contents</div>' );
$.parseHTML( '<div attr=val>' );
$.parseHTML( '<div attr=val />' );
$.parseHTML( '<div>' + 'content' + '</div>' );
$.parseHTML( '<div>' );
$( '<div/>' );
$( '<div></div>' );
```
❌ With `[{"singleTagStyle":"minimal"}]` options:
```js
$( '<div/>' );
$( '<div></div>' );
```
❌ With `[{"singleTagStyle":"self-closing"}]` options:
```js
$( '<div>' );
$( '<div />' );
$( '<div></div>' );
```
❌ With `[{"singleTagStyle":"any"}]` options:
```js
$( '<div attr=val>' );
$( '<div><div>' );
```

✔️ The following patterns are not considered errors:
```js
$();
$( '' );
$( [] );
$( '#id > .class[attr]' );
$( variable );
$( variable1 = variable2 );
$( function () {} );
$( '<div>' );
$( '<div>', { width: 100 } );
$( '<' + 'div' + '>' );
$div.html();
$div.html( variable );
$.html( '<div>contents</div>' );
$div.append( variable );
$div.add( variable );
$.parseHTML( variable );
$.parseHTML( variable1 + variable2 );
$.parseHTML( 'string' + variable );
```
✔️ With `[{"singleTagStyle":"minimal"}]` options:
```js
$( '<div>' );
```
✔️ With `[{"singleTagStyle":"self-closing"}]` options:
```js
$( '<div/>' );
```
✔️ With `[{"singleTagStyle":"any"}]` options:
```js
$( '<div />' );
$( '<div></div>' );
$( '<div>' + '</div>' );
$( '<div />' );
```
