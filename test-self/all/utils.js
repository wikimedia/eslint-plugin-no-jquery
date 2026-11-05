/**
 * This file lists all known methods, for tracking #112
 *
 * Once a rule has been created for a method, it should be disabled
 * with a "next-line" directive, and moved to the bottom half of
 * the file.
 *
 * It should also be removed from the no-other-utils rule.
 */

/* eslint-disable no-jquery/no-other-utils */
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
$.Event();
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
/* eslint-enable no-jquery/no-other-utils */

// eslint-disable-next-line no-jquery/no-ajax
$.ajax();
// eslint-disable-next-line no-jquery/no-attr
$.attr();
// eslint-disable-next-line no-jquery/no-camel-case
$.camelCase();
// eslint-disable-next-line no-jquery/no-clone
$.clone();
// eslint-disable-next-line no-jquery/no-contains
$.contains();
// eslint-disable-next-line no-jquery/no-css
$.css();
// eslint-disable-next-line no-jquery/no-data
$.data();
// eslint-disable-next-line no-jquery/no-deferred
$.Deferred();
// eslint-disable-next-line no-jquery/no-each-util
$.each();
// eslint-disable-next-line no-jquery/no-error
$.error();
// eslint-disable-next-line no-jquery/no-escape-selector
$.escapeSelector();
// eslint-disable-next-line no-jquery/no-extend
$.extend();
// eslint-disable-next-line no-jquery/no-filter
$.filter();
// eslint-disable-next-line no-jquery/no-find-util
$.find();
// eslint-disable-next-line no-jquery/no-fx
$.fx();
// eslint-disable-next-line no-jquery/no-ajax
$.get();
// eslint-disable-next-line no-jquery/no-ajax
$.getJSON();
// eslint-disable-next-line no-jquery/no-ajax
$.getScript();
// eslint-disable-next-line no-jquery/no-global-eval
$.globalEval();
// eslint-disable-next-line no-jquery/no-grep
$.grep();
// eslint-disable-next-line no-jquery/no-data
$.hasData();
// eslint-disable-next-line no-jquery/no-hold-ready
$.holdReady();
// eslint-disable-next-line no-jquery/no-in-array
$.inArray();
// eslint-disable-next-line no-jquery/no-is-array
$.isArray();
// eslint-disable-next-line no-jquery/no-is-empty-object
$.isEmptyObject();
// eslint-disable-next-line no-jquery/no-is-function
$.isFunction();
// eslint-disable-next-line no-jquery/no-is-numeric
$.isNumeric();
// eslint-disable-next-line no-jquery/no-is-plain-object
$.isPlainObject();
// eslint-disable-next-line no-jquery/no-is-window
$.isWindow();
// eslint-disable-next-line no-jquery/no-map-util
$.map();
// eslint-disable-next-line no-jquery/no-merge
$.merge();
// eslint-disable-next-line no-jquery/no-node-name
$.nodeName();
// eslint-disable-next-line no-jquery/no-noop
$.noop();
// eslint-disable-next-line no-jquery/no-now
$.now();
// eslint-disable-next-line no-jquery/no-param
$.param();
// eslint-disable-next-line no-jquery/no-parse-html
$.parseHTML();
// eslint-disable-next-line no-jquery/no-parse-json
$.parseJSON();
// eslint-disable-next-line no-jquery/no-parse-xml
$.parseXML();
// eslint-disable-next-line no-jquery/no-ajax
$.post();
// eslint-disable-next-line no-jquery/no-prop
$.prop();
// eslint-disable-next-line no-jquery/no-proxy
$.proxy();
// eslint-disable-next-line no-jquery/no-attr
$.removeAttr();
// eslint-disable-next-line no-jquery/no-data
$.removeData();
// eslint-disable-next-line no-jquery/no-sub
$.sub();
// eslint-disable-next-line no-jquery/no-text
$.text();
// eslint-disable-next-line no-jquery/no-trim
$.trim();
// eslint-disable-next-line no-jquery/no-type
$.type();
// eslint-disable-next-line no-jquery/no-unique
$.unique();
// eslint-disable-next-line no-jquery/no-when
$.when();
