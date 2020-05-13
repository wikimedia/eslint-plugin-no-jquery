# no-constructor-attributes

Disallows passing attributes to the jQuery constructor. Prefer `.attr`.

## Rule details

❌ The following patterns are considered errors:
```js
$( '<div>', { width: 100, class: 'foo' } );
$( '<div>', { on: { click: function () {} } } );
$( '<div/>', { data: { foo: 'bar' } } );
$div.add( '<div>', { width: 100, class: 'foo' } );
```

✔️ The following patterns are not considered errors:
```js
$( '.div' );
$( '<div>' );
$( '.div', context );
$( '<div>', ownerDocument );
$( '<div/>', ownerDocument );
$div.add( '<div>', context );
```

## Resources

* [Rule source](/src/rules/no-constructor-attributes.js)
* [Test source](/src/tests/no-constructor-attributes.js)
