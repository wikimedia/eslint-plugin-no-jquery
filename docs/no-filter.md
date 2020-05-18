# no-filter

Disallows the [`.filter`](https://api.jquery.com/filter/) method and `$.filter` utility. Prefer `Array#filter`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.filter();
$( 'div' ).filter();
$div.filter();
$( 'div' ).first().filter();
$( 'div' ).append( $( 'input' ).filter() );
```

✔️ Examples of **correct** code:
```js
filter();
[].filter();
div.filter();
div.filter;
```

## Resources

* [Rule source](/src/rules/no-filter.js)
* [Test source](/src/tests/no-filter.js)
