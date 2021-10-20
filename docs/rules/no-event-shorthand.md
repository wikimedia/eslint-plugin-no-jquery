# no-event-shorthand

Disallows the [`.error`](https://api.jquery.com/error/)/[`.resize`](https://api.jquery.com/resize/)/[`.scroll`](https://api.jquery.com/scroll/)/[`.unload`](https://api.jquery.com/unload/)/[`.blur`](https://api.jquery.com/blur/)/[`.change`](https://api.jquery.com/change/)/[`.focus`](https://api.jquery.com/focus/)/[`.focusin`](https://api.jquery.com/focusin/)/[`.focusout`](https://api.jquery.com/focusout/)/[`.select`](https://api.jquery.com/select/)/[`.submit`](https://api.jquery.com/submit/)/[`.keydown`](https://api.jquery.com/keydown/)/[`.keypress`](https://api.jquery.com/keypress/)/[`.keyup`](https://api.jquery.com/keyup/)/[`.click`](https://api.jquery.com/click/)/[`.contextmenu`](https://api.jquery.com/contextmenu/)/[`.dblclick`](https://api.jquery.com/dblclick/)/[`.hover`](https://api.jquery.com/hover/)/[`.mousedown`](https://api.jquery.com/mousedown/)/[`.mouseenter`](https://api.jquery.com/mouseenter/)/[`.mouseleave`](https://api.jquery.com/mouseleave/)/[`.mousemove`](https://api.jquery.com/mousemove/)/[`.mouseout`](https://api.jquery.com/mouseout/)/[`.mouseover`](https://api.jquery.com/mouseover/)/[`.mouseup`](https://api.jquery.com/mouseup/)/[`.ajaxComplete`](https://api.jquery.com/ajaxComplete/)/[`.ajaxError`](https://api.jquery.com/ajaxError/)/[`.ajaxSend`](https://api.jquery.com/ajaxSend/)/[`.ajaxStart`](https://api.jquery.com/ajaxStart/)/[`.ajaxStop`](https://api.jquery.com/ajaxStop/)/[`.ajaxSuccess`](https://api.jquery.com/ajaxSuccess/) methods. Use the `allowAjaxEvents` option to allow `ajax*` methods. Prefer `.on` or `.trigger`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.5`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3` with `[{"allowAjaxEvents":true}]` options.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).error( handler );
$div.error();
$( 'div' ).resize( handler );
$div.resize();
$( 'div' ).scroll( handler );
$div.scroll();
$( 'div' ).unload( handler );
$div.unload();
$( 'div' ).blur( handler );
$div.blur();
$( 'div' ).change( handler );
$div.change();
$( 'div' ).focus( handler );
$div.focus();
$( 'div' ).focusin( handler );
$div.focusin();
$( 'div' ).focusout( handler );
$div.focusout();
$( 'div' ).select( handler );
$div.select();
$( 'div' ).submit( handler );
$div.submit();
$( 'div' ).keydown( handler );
$div.keydown();
$( 'div' ).keypress( handler );
$div.keypress();
$( 'div' ).keyup( handler );
$div.keyup();
$( 'div' ).click( handler );
$div.click();
$( 'div' ).contextmenu( handler );
$div.contextmenu();
$( 'div' ).dblclick( handler );
$div.dblclick();
$( 'div' ).hover( handler );
$div.hover();
$( 'div' ).mousedown( handler );
$div.mousedown();
$( 'div' ).mouseenter( handler );
$div.mouseenter();
$( 'div' ).mouseleave( handler );
$div.mouseleave();
$( 'div' ).mousemove( handler );
$div.mousemove();
$( 'div' ).mouseout( handler );
$div.mouseout();
$( 'div' ).mouseover( handler );
$div.mouseover();
$( 'div' ).mouseup( handler );
$div.mouseup();
$( 'div' ).ajaxStart( handler );
$div.ajaxStart();
$( 'div' ).ajaxStop( handler );
$div.ajaxStop();
$( 'div' ).ajaxComplete( handler );
$div.ajaxComplete();
$( 'div' ).ajaxError( handler );
$div.ajaxError();
$( 'div' ).ajaxSuccess( handler );
$div.ajaxSuccess();
$( 'div' ).ajaxSend( handler );
$div.ajaxSend();
```

✔️ Examples of **correct** code:
```js
$div.on( 'error', fn );
$div.trigger( 'error' );
$div.on( 'resize', fn );
$div.trigger( 'resize' );
$div.on( 'scroll', fn );
$div.trigger( 'scroll' );
$div.on( 'unload', fn );
$div.trigger( 'unload' );
$div.on( 'blur', fn );
$div.trigger( 'blur' );
$div.on( 'change', fn );
$div.trigger( 'change' );
$div.on( 'focus', fn );
$div.trigger( 'focus' );
$div.on( 'focusin', fn );
$div.trigger( 'focusin' );
$div.on( 'focusout', fn );
$div.trigger( 'focusout' );
$div.on( 'select', fn );
$div.trigger( 'select' );
$div.on( 'submit', fn );
$div.trigger( 'submit' );
$div.on( 'keydown', fn );
$div.trigger( 'keydown' );
$div.on( 'keypress', fn );
$div.trigger( 'keypress' );
$div.on( 'keyup', fn );
$div.trigger( 'keyup' );
$div.on( 'click', fn );
$div.trigger( 'click' );
$div.on( 'contextmenu', fn );
$div.trigger( 'contextmenu' );
$div.on( 'dblclick', fn );
$div.trigger( 'dblclick' );
$div.on( 'hover', fn );
$div.trigger( 'hover' );
$div.on( 'mousedown', fn );
$div.trigger( 'mousedown' );
$div.on( 'mouseenter', fn );
$div.trigger( 'mouseenter' );
$div.on( 'mouseleave', fn );
$div.trigger( 'mouseleave' );
$div.on( 'mousemove', fn );
$div.trigger( 'mousemove' );
$div.on( 'mouseout', fn );
$div.trigger( 'mouseout' );
$div.on( 'mouseover', fn );
$div.trigger( 'mouseover' );
$div.on( 'mouseup', fn );
$div.trigger( 'mouseup' );
$div.on( 'ajaxStart', fn );
$div.trigger( 'ajaxStart' );
$div.on( 'ajaxStop', fn );
$div.trigger( 'ajaxStop' );
$div.on( 'ajaxComplete', fn );
$div.trigger( 'ajaxComplete' );
$div.on( 'ajaxError', fn );
$div.trigger( 'ajaxError' );
$div.on( 'ajaxSuccess', fn );
$div.trigger( 'ajaxSuccess' );
$div.on( 'ajaxSend', fn );
$div.trigger( 'ajaxSend' );
$div.load( 'url', handler );
```

✔️ Examples of **correct** code with `[{"allowAjaxEvents":true}]` options:
```js
$div.ajaxStart();
$div.ajaxStop();
$div.ajaxComplete();
$div.ajaxError();
$div.ajaxSuccess();
$div.ajaxSend();
$div.on( 'ajaxStart', fn );
$div.on( 'ajaxStop', fn );
$div.on( 'ajaxComplete', fn );
$div.on( 'ajaxError', fn );
$div.on( 'ajaxSuccess', fn );
$div.on( 'ajaxSend', fn );
```

🔧 Examples of code **fixed** by this rule:
```js
$( 'div' ).error( handler );                      /* → */ $( 'div' ).on( 'error', handler );
$div.error();                                     /* → */ $div.trigger( 'error' );
$( 'div' ).resize( handler );                     /* → */ $( 'div' ).on( 'resize', handler );
$div.resize();                                    /* → */ $div.trigger( 'resize' );
$( 'div' ).scroll( handler );                     /* → */ $( 'div' ).on( 'scroll', handler );
$div.scroll();                                    /* → */ $div.trigger( 'scroll' );
$( 'div' ).unload( handler );                     /* → */ $( 'div' ).on( 'unload', handler );
$div.unload();                                    /* → */ $div.trigger( 'unload' );
$( 'div' ).blur( handler );                       /* → */ $( 'div' ).on( 'blur', handler );
$div.blur();                                      /* → */ $div.trigger( 'blur' );
$( 'div' ).change( handler );                     /* → */ $( 'div' ).on( 'change', handler );
$div.change();                                    /* → */ $div.trigger( 'change' );
$( 'div' ).focus( handler );                      /* → */ $( 'div' ).on( 'focus', handler );
$div.focus();                                     /* → */ $div.trigger( 'focus' );
$( 'div' ).focusin( handler );                    /* → */ $( 'div' ).on( 'focusin', handler );
$div.focusin();                                   /* → */ $div.trigger( 'focusin' );
$( 'div' ).focusout( handler );                   /* → */ $( 'div' ).on( 'focusout', handler );
$div.focusout();                                  /* → */ $div.trigger( 'focusout' );
$( 'div' ).select( handler );                     /* → */ $( 'div' ).on( 'select', handler );
$div.select();                                    /* → */ $div.trigger( 'select' );
$( 'div' ).submit( handler );                     /* → */ $( 'div' ).on( 'submit', handler );
$div.submit();                                    /* → */ $div.trigger( 'submit' );
$( 'div' ).keydown( handler );                    /* → */ $( 'div' ).on( 'keydown', handler );
$div.keydown();                                   /* → */ $div.trigger( 'keydown' );
$( 'div' ).keypress( handler );                   /* → */ $( 'div' ).on( 'keypress', handler );
$div.keypress();                                  /* → */ $div.trigger( 'keypress' );
$( 'div' ).keyup( handler );                      /* → */ $( 'div' ).on( 'keyup', handler );
$div.keyup();                                     /* → */ $div.trigger( 'keyup' );
$( 'div' ).click( handler );                      /* → */ $( 'div' ).on( 'click', handler );
$div.click();                                     /* → */ $div.trigger( 'click' );
$( 'div' ).contextmenu( handler );                /* → */ $( 'div' ).on( 'contextmenu', handler );
$div.contextmenu();                               /* → */ $div.trigger( 'contextmenu' );
$( 'div' ).dblclick( handler );                   /* → */ $( 'div' ).on( 'dblclick', handler );
$div.dblclick();                                  /* → */ $div.trigger( 'dblclick' );
$( 'div' ).hover( handler );                      /* → */ $( 'div' ).on( 'hover', handler );
$div.hover();                                     /* → */ $div.trigger( 'hover' );
$( 'div' ).mousedown( handler );                  /* → */ $( 'div' ).on( 'mousedown', handler );
$div.mousedown();                                 /* → */ $div.trigger( 'mousedown' );
$( 'div' ).mouseenter( handler );                 /* → */ $( 'div' ).on( 'mouseenter', handler );
$div.mouseenter();                                /* → */ $div.trigger( 'mouseenter' );
$( 'div' ).mouseleave( handler );                 /* → */ $( 'div' ).on( 'mouseleave', handler );
$div.mouseleave();                                /* → */ $div.trigger( 'mouseleave' );
$( 'div' ).mousemove( handler );                  /* → */ $( 'div' ).on( 'mousemove', handler );
$div.mousemove();                                 /* → */ $div.trigger( 'mousemove' );
$( 'div' ).mouseout( handler );                   /* → */ $( 'div' ).on( 'mouseout', handler );
$div.mouseout();                                  /* → */ $div.trigger( 'mouseout' );
$( 'div' ).mouseover( handler );                  /* → */ $( 'div' ).on( 'mouseover', handler );
$div.mouseover();                                 /* → */ $div.trigger( 'mouseover' );
$( 'div' ).mouseup( handler );                    /* → */ $( 'div' ).on( 'mouseup', handler );
$div.mouseup();                                   /* → */ $div.trigger( 'mouseup' );
$( 'div' ).ajaxStart( handler );                  /* → */ $( 'div' ).on( 'ajaxStart', handler );
$div.ajaxStart();                                 /* → */ $div.trigger( 'ajaxStart' );
$( 'div' ).ajaxStop( handler );                   /* → */ $( 'div' ).on( 'ajaxStop', handler );
$div.ajaxStop();                                  /* → */ $div.trigger( 'ajaxStop' );
$( 'div' ).ajaxComplete( handler );               /* → */ $( 'div' ).on( 'ajaxComplete', handler );
$div.ajaxComplete();                              /* → */ $div.trigger( 'ajaxComplete' );
$( 'div' ).ajaxError( handler );                  /* → */ $( 'div' ).on( 'ajaxError', handler );
$div.ajaxError();                                 /* → */ $div.trigger( 'ajaxError' );
$( 'div' ).ajaxSuccess( handler );                /* → */ $( 'div' ).on( 'ajaxSuccess', handler );
$div.ajaxSuccess();                               /* → */ $div.trigger( 'ajaxSuccess' );
$( 'div' ).ajaxSend( handler );                   /* → */ $( 'div' ).on( 'ajaxSend', handler );
$div.ajaxSend();                                  /* → */ $div.trigger( 'ajaxSend' );
```

## Resources

* [Rule source](/src/rules/no-event-shorthand.js)
* [Test source](/tests/rules/no-event-shorthand.js)
