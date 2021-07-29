# no-constructor-attributes

Disallows passing attributes to the jQuery constructor. Prefer `.attr`.

## Rule details

❌ Examples of **incorrect** code:
```js
$( '<div>', { width: 100, class: 'foo' } );
$( '<div>', { on: { click: function () {} } } );
$( '<div/>', { data: { foo: 'bar' } } );
$div.add( '<div>', { width: 100, class: 'foo' } );
```

✔️ Examples of **correct** code:
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
* [Test source](/tests/rules/no-constructor-attributes.js)
