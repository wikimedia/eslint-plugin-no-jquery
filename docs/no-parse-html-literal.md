# no-parse-html-literal

Disallows parsing of HTML literal strings using either the jQuery method $() or $.parseHTML. Single tags are still allowed for creating new nodes as these don't tirgger the HTML parser. DOM build and manipulation methods should be used instead.

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
```

✔️ The following patterns are not considered errors:
```js
$();
$( '' );
$( [] );
$( variable );
$( variable1 = variable2 );
$( function () {} );
$( '<div>' );
$( '<div></div>' );
$( '<div>', { width: 100 } );
$( '<div/>' );
$( '<div />' );
$( '<' + 'div' + '>' );
$div.html();
$div.html( variable );
$div.append( variable );
$div.add( variable );
$.parseHTML( variable );
$.parseHTML( variable1 + variable2 );
$.parseHTML( 'string' + variable );
```
