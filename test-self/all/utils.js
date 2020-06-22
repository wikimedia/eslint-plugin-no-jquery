/**
 * This file lists all known methods, for tracking #112
 *
 * Once a rule has been created for a method, it should be disabled
 * with a "next-line" directive, and moved to the bottom half of
 * the file.
 *
 * It should also be removed from the no-other-utils rule.
 *
 * The rule prefix is renamed from no-jquery to self as the
 * rules are loaded directly via the self plugin.
 */

/* eslint-disable self/no-other-utils */
$._data();
$._evalUrl();
$._queueHooks();
$._removeData();
$.ajaxPrefilter();
$.ajaxSetup();
$.ajaxTransport();
$.Animation();
$.Callbacks();
$.cleanData();
$.dequeue();
$.escapeSelector();
$.Event();
$.fx();
$.htmlPrefilter();
$.isXMLDoc();
$.makeArray();
$.noConflict();
$.queue();
$.ready();
$.readyException();
$.removeEvent();
$.speed();
$.style();
$.Tween();
$.uniqueSort();
$.myPlugin();
/* eslint-enable self/no-other-utils */

// eslint-disable-next-line self/no-ajax
$.ajax();
// eslint-disable-next-line self/no-attr
$.attr();
// eslint-disable-next-line self/no-camel-case
$.camelCase();
// eslint-disable-next-line self/no-clone
$.clone();
// eslint-disable-next-line self/no-contains
$.contains();
// eslint-disable-next-line self/no-css
$.css();
// eslint-disable-next-line self/no-data
$.data();
// eslint-disable-next-line self/no-deferred
$.Deferred();
// eslint-disable-next-line self/no-each-util
$.each();
// eslint-disable-next-line self/no-error
$.error();
// eslint-disable-next-line self/no-extend
$.extend();
// eslint-disable-next-line self/no-filter
$.filter();
// eslint-disable-next-line self/no-find-util
$.find();
// eslint-disable-next-line self/no-ajax
$.get();
// eslint-disable-next-line self/no-ajax
$.getJSON();
// eslint-disable-next-line self/no-ajax
$.getScript();
// eslint-disable-next-line self/no-global-eval
$.globalEval();
// eslint-disable-next-line self/no-grep
$.grep();
// eslint-disable-next-line self/no-data
$.hasData();
// eslint-disable-next-line self/no-hold-ready
$.holdReady();
// eslint-disable-next-line self/no-in-array
$.inArray();
// eslint-disable-next-line self/no-is-array
$.isArray();
// eslint-disable-next-line self/no-is-empty-object
$.isEmptyObject();
// eslint-disable-next-line self/no-is-function
$.isFunction();
// eslint-disable-next-line self/no-is-numeric
$.isNumeric();
// eslint-disable-next-line self/no-is-plain-object
$.isPlainObject();
// eslint-disable-next-line self/no-is-window
$.isWindow();
// eslint-disable-next-line self/no-map-util
$.map();
// eslint-disable-next-line self/no-merge
$.merge();
// eslint-disable-next-line self/no-node-name
$.nodeName();
// eslint-disable-next-line self/no-noop
$.noop();
// eslint-disable-next-line self/no-now
$.now();
// eslint-disable-next-line self/no-param
$.param();
// eslint-disable-next-line self/no-parse-html
$.parseHTML();
// eslint-disable-next-line self/no-parse-json
$.parseJSON();
// eslint-disable-next-line self/no-parse-xml
$.parseXML();
// eslint-disable-next-line self/no-ajax
$.post();
// eslint-disable-next-line self/no-prop
$.prop();
// eslint-disable-next-line self/no-proxy
$.proxy();
// eslint-disable-next-line self/no-attr
$.removeAttr();
// eslint-disable-next-line self/no-data
$.removeData();
// eslint-disable-next-line self/no-sub
$.sub();
// eslint-disable-next-line self/no-text
$.text();
// eslint-disable-next-line self/no-trim
$.trim();
// eslint-disable-next-line self/no-type
$.type();
// eslint-disable-next-line self/no-unique
$.unique();
// eslint-disable-next-line self/no-when
$.when();
