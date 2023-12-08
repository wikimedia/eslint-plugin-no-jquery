/**
 * This file lists all known methods, for tracking #112
 *
 * Once a rule has been created for a method, it should be disabled
 * with a "next-line" directive, and moved to the bottom half of
 * the file.
 *
 * It should also be removed from the no-other-methods rule.
 *
 * The rule prefix is renamed from no-jquery to self as the
 * rules are loaded directly via the self plugin.
 */

/* eslint-disable self/no-other-methods */
$x.add();
$x.addBack();
$x.after();
$x.append();
$x.appendTo();
$x.before();
$x.children();
$x.clearQueue();
$x.constructor();
$x.contents();
$x.delay();
$x.dequeue();
$x.detach();
$x.empty();
$x.end();
$x.eq();
$x.even();
$x.extend();
$x.finish();
$x.first();
$x.get();
$x.height();
$x.index();
$x.init();
$x.innerHeight();
$x.innerWidth();
$x.insertAfter();
$x.insertBefore();
$x.last();
$x.next();
$x.nextAll();
$x.nextUntil();
$x.not();
$x.odd();
$x.off();
$x.offset();
$x.offsetParent();
$x.on();
$x.one();
$x.outerHeight();
$x.outerWidth();
$x.parentsUntil();
$x.position();
$x.prepend();
$x.prependTo();
$x.prev();
$x.prevAll();
$x.prevUntil();
$x.promise();
$x.pushStack();
$x.queue();
$x.remove();
// eslint-disable-next-line es-x/no-string-prototype-replaceall
$x.replaceAll();
$x.replaceWith();
$x.scrollLeft();
$x.scrollTop();
$x.siblings();
$x.slice();
$x.stop();
$x.toArray();
$x.triggerHandler();
$x.width();
$x.myPlugin();
/* eslint-enable self/no-other-methods */

// eslint-disable-next-line self/no-class
$x.addClass();
// eslint-disable-next-line self/no-event-shorthand
$x.ajaxComplete();
// eslint-disable-next-line self/no-event-shorthand
$x.ajaxError();
// eslint-disable-next-line self/no-event-shorthand
$x.ajaxSend();
// eslint-disable-next-line self/no-event-shorthand
$x.ajaxStart();
// eslint-disable-next-line self/no-event-shorthand
$x.ajaxStop();
// eslint-disable-next-line self/no-event-shorthand
$x.ajaxSuccess();
// eslint-disable-next-line self/no-animate
$x.animate();
// eslint-disable-next-line self/no-attr
$x.attr();
// eslint-disable-next-line self/no-bind
$x.bind();
// eslint-disable-next-line self/no-event-shorthand
$x.blur();
// eslint-disable-next-line self/no-event-shorthand
$x.change();
// eslint-disable-next-line self/no-event-shorthand
$x.click();
// eslint-disable-next-line self/no-clone
$x.clone();
// eslint-disable-next-line self/no-closest
$x.closest();
// eslint-disable-next-line self/no-event-shorthand
$x.contextmenu();
// eslint-disable-next-line self/no-css
$x.css();
// eslint-disable-next-line self/no-data
$x.data();
// eslint-disable-next-line self/no-event-shorthand
$x.dblclick();
// eslint-disable-next-line self/no-delegate
$x.delegate();
// eslint-disable-next-line self/no-live
$x.die();
// eslint-disable-next-line self/no-each-collection
$x.each();
// eslint-disable-next-line self/no-fade
$x.fadeIn();
// eslint-disable-next-line self/no-fade
$x.fadeOut();
// eslint-disable-next-line self/no-fade
$x.fadeTo();
// eslint-disable-next-line self/no-fade
$x.fadeToggle();
// eslint-disable-next-line self/no-filter
$x.filter();
// eslint-disable-next-line self/no-find-collection
$x.find();
// eslint-disable-next-line self/no-event-shorthand
$x.focus();
// eslint-disable-next-line self/no-event-shorthand
$x.focusin();
// eslint-disable-next-line self/no-event-shorthand
$x.focusout();
// eslint-disable-next-line self/no-has
$x.has();
// eslint-disable-next-line self/no-class
$x.hasClass();
// eslint-disable-next-line self/no-visibility
$x.hide();
// eslint-disable-next-line self/no-event-shorthand
$x.hover();
// eslint-disable-next-line self/no-html
$x.html();
// eslint-disable-next-line self/no-is
$x.is();
// eslint-disable-next-line self/no-event-shorthand
$x.keydown();
// eslint-disable-next-line self/no-event-shorthand
$x.keypress();
// eslint-disable-next-line self/no-event-shorthand
$x.keyup();
// eslint-disable-next-line self/no-live
$x.live();
// eslint-disable-next-line self/no-load
$x.load();
// eslint-disable-next-line self/no-map-collection
$x.map();
// eslint-disable-next-line self/no-event-shorthand
$x.mousedown();
// eslint-disable-next-line self/no-event-shorthand
$x.mouseenter();
// eslint-disable-next-line self/no-event-shorthand
$x.mouseleave();
// eslint-disable-next-line self/no-event-shorthand
$x.mousemove();
// eslint-disable-next-line self/no-event-shorthand
$x.mouseout();
// eslint-disable-next-line self/no-event-shorthand
$x.mouseover();
// eslint-disable-next-line self/no-event-shorthand
$x.mouseup();
// eslint-disable-next-line self/no-parent
$x.parent();
// eslint-disable-next-line self/no-parents
$x.parents();
// eslint-disable-next-line self/no-prop
$x.prop();
// eslint-disable-next-line self/no-ready-shorthand
$x.ready();
// eslint-disable-next-line self/no-attr
$x.removeAttr();
// eslint-disable-next-line self/no-class
$x.removeClass();
// eslint-disable-next-line self/no-data
$x.removeData();
// eslint-disable-next-line self/no-prop
$x.removeProp();
// eslint-disable-next-line self/no-event-shorthand, es-x/no-resizable-and-growable-arraybuffers
$x.resize();
// eslint-disable-next-line self/no-event-shorthand
$x.scroll();
// eslint-disable-next-line self/no-event-shorthand
$x.select();
// eslint-disable-next-line self/no-serialize
$x.serialize();
// eslint-disable-next-line self/no-serialize
$x.serializeArray();
// eslint-disable-next-line self/no-visibility
$x.show();
// eslint-disable-next-line self/no-size
$x.size();
// eslint-disable-next-line self/no-slide
$x.slideDown();
// eslint-disable-next-line self/no-slide
$x.slideToggle();
// eslint-disable-next-line self/no-slide
$x.slideUp();
// eslint-disable-next-line self/no-event-shorthand
$x.submit();
// eslint-disable-next-line self/no-text
$x.text();
// eslint-disable-next-line self/no-visibility
$x.toggle();
// eslint-disable-next-line self/no-class
$x.toggleClass();
// eslint-disable-next-line self/no-trigger
$x.trigger();
// eslint-disable-next-line self/no-bind
$x.unbind();
// eslint-disable-next-line self/no-delegate
$x.undelegate();
// eslint-disable-next-line self/no-wrap
$x.unwrap();
// eslint-disable-next-line self/no-val
$x.val();
// eslint-disable-next-line self/no-wrap
$x.wrap();
// eslint-disable-next-line self/no-wrap
$x.wrapAll();
// eslint-disable-next-line self/no-wrap
$x.wrapInner();
