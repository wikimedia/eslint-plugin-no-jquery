# no-filter

Disallows the .filter method and $.filter utility. Prefer Array#filter.

## Rule details

✗ The following patterns are considered errors:
```js
$.filter();
$( 'div' ).filter();
$div.filter();
$( 'div' ).first().filter();
$( 'div' ).append( $( 'input' ).filter() );
```

✓ The following patterns are not considered errors:
```js
filter();
[].filter();
div.filter();
div.filter;
```
