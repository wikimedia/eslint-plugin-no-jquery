/**
 * This file lists all known methods, for tracking #112
 *
 * Once a rule has been created for a method, it should be disabled
 * with a "next-line" directive, and moved to the bottom half of
 * the file.
 *
 * The rule prefix is renamed from no-jquery to rulesdir as the
 * rules are loaded directly via the rulesdir plugin.
 */

/* eslint-disable no-underscore-dangle */
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

// eslint-disable-next-line rulesdir/no-ajax
$.ajax();
// eslint-disable-next-line rulesdir/no-attr
$.attr();
// eslint-disable-next-line rulesdir/no-camel-case
$.camelCase();
// eslint-disable-next-line rulesdir/no-clone
$.clone();
// eslint-disable-next-line rulesdir/no-contains
$.contains();
// eslint-disable-next-line rulesdir/no-css
$.css();
// eslint-disable-next-line rulesdir/no-data
$.data();
// eslint-disable-next-line rulesdir/no-deferred
$.Deferred();
// eslint-disable-next-line rulesdir/no-each, rulesdir/no-each-util
$.each();
// eslint-disable-next-line rulesdir/no-error
$.error();
// eslint-disable-next-line rulesdir/no-extend
$.extend();
// eslint-disable-next-line rulesdir/no-filter
$.filter();
// eslint-disable-next-line rulesdir/no-find, rulesdir/no-find-util
$.find();
// eslint-disable-next-line rulesdir/no-ajax
$.get();
// eslint-disable-next-line rulesdir/no-ajax
$.getJSON();
// eslint-disable-next-line rulesdir/no-ajax
$.getScript();
// eslint-disable-next-line rulesdir/no-global-eval
$.globalEval();
// eslint-disable-next-line rulesdir/no-grep
$.grep();
// eslint-disable-next-line rulesdir/no-data
$.hasData();
// eslint-disable-next-line rulesdir/no-hold-ready
$.holdReady();
// eslint-disable-next-line rulesdir/no-in-array
$.inArray();
// eslint-disable-next-line rulesdir/no-is-array
$.isArray();
// eslint-disable-next-line rulesdir/no-is-empty-object
$.isEmptyObject();
// eslint-disable-next-line rulesdir/no-is-function
$.isFunction();
// eslint-disable-next-line rulesdir/no-is-numeric
$.isNumeric();
// eslint-disable-next-line rulesdir/no-is-plain-object
$.isPlainObject();
// eslint-disable-next-line rulesdir/no-is-window
$.isWindow();
// eslint-disable-next-line rulesdir/no-map, rulesdir/no-map-util
$.map();
// eslint-disable-next-line rulesdir/no-merge
$.merge();
// eslint-disable-next-line rulesdir/no-node-name
$.nodeName();
// eslint-disable-next-line rulesdir/no-noop
$.noop();
// eslint-disable-next-line rulesdir/no-now
$.now();
// eslint-disable-next-line rulesdir/no-param
$.param();
// eslint-disable-next-line rulesdir/no-parse-html
$.parseHTML();
// eslint-disable-next-line rulesdir/no-parse-json
$.parseJSON();
// eslint-disable-next-line rulesdir/no-parse-xml
$.parseXML();
// eslint-disable-next-line rulesdir/no-ajax
$.post();
// eslint-disable-next-line rulesdir/no-prop
$.prop();
// eslint-disable-next-line rulesdir/no-proxy
$.proxy();
// eslint-disable-next-line rulesdir/no-attr
$.removeAttr();
// eslint-disable-next-line rulesdir/no-data
$.removeData();
// eslint-disable-next-line rulesdir/no-text
$.text();
// eslint-disable-next-line rulesdir/no-trim
$.trim();
// eslint-disable-next-line rulesdir/no-type
$.type();
// eslint-disable-next-line rulesdir/no-unique
$.unique();
// eslint-disable-next-line rulesdir/no-when
$.when();
