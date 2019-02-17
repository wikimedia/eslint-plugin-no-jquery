# eslint-plugin-no-jquery

Disallow jQuery functions with native equivalents. This is the Wikimedia-maintained fork of [this project](https://www.npmjs.com/package/eslint-plugin-no-jquery).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-no-jquery`:

```
$ npm install eslint-plugin-no-jquery --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-jquery` globally.

## Usage

Add `jquery` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "extends": "plugin:no-jquery/deprecated",
  "plugins": [
    "jquery"
  ]
}
```

The pre-set profile `plugin:no-jquery/deprecated` includes all known deprecated and removed code, and is updated as new releases of jQuery come out. You can instead use profiles targetting specific versions of jQuery if you know the environment in which your code will operate. There are profiles for jQuery 3.3.x+ environments (`deprecated-3.3`), 3.0.x+ (`deprecated-3.0`), and several others for completeness.

Alternatively, you can pick out rules individually:

```json
{
  "plugins": [
    "jquery"
  ],
  "rules": {
    "no-jquery/no-ajax": 2,
    "no-jquery/no-ajax-events": 2,
    "no-jquery/no-and-self": 2,
    "no-jquery/no-animate": 2,
    "no-jquery/no-animate-toggle": 2,
    "no-jquery/no-attr": 2,
    "no-jquery/no-bind": 2,
    "no-jquery/no-box-model": 2,
    "no-jquery/no-browser": 2,
    "no-jquery/no-class": 2,
    "no-jquery/no-clone": 2,
    "no-jquery/no-closest": 2,
    "no-jquery/no-context-prop": 2,
    "no-jquery/no-css": 2,
    "no-jquery/no-data": 2,
    "no-jquery/no-deferred": 2,
    "no-jquery/no-delegate": 2,
    "no-jquery/no-die": 2,
    "no-jquery/no-each": 2,
    "no-jquery/no-each-collection": 2,
    "no-jquery/no-each-util": 2,
    "no-jquery/no-error-shorthand": 2,
    "no-jquery/no-event-shorthand": 2,
    "no-jquery/no-extend": 2,
    "no-jquery/no-fade": 2,
    "no-jquery/no-filter": 2,
    "no-jquery/no-find": 2,
    "no-jquery/no-fx-interval": 2,
    "no-jquery/no-global-eval": 2,
    "no-jquery/no-grep": 2,
    "no-jquery/no-has": 2,
    "no-jquery/no-hide": 2,
    "no-jquery/no-hold-ready": 2,
    "no-jquery/no-html": 2,
    "no-jquery/no-in-array": 2,
    "no-jquery/no-is-array": 2,
    "no-jquery/no-is-function": 2,
    "no-jquery/no-is-numeric": 2,
    "no-jquery/no-is-window": 2,
    "no-jquery/no-is": 2,
    "no-jquery/no-live": 2,
    "no-jquery/no-load": 2,
    "no-jquery/no-load-shorthand": 2,
    "no-jquery/no-map": 2,
    "no-jquery/no-map-collection": 2,
    "no-jquery/no-map-util": 2,
    "no-jquery/no-merge": 2,
    "no-jquery/no-noop": 2,
    "no-jquery/no-now": 2,
    "no-jquery/no-on-ready": 2,
    "no-jquery/no-param": 2,
    "no-jquery/no-parent": 2,
    "no-jquery/no-parents": 2,
    "no-jquery/no-parse-html": 2,
    "no-jquery/no-parse-html-literal": 2,
    "no-jquery/no-parse-json": 2,
    "no-jquery/no-prop": 2,
    "no-jquery/no-proxy": 2,
    "no-jquery/no-ready": 2,
    "no-jquery/no-ready-shorthand": 2,
    "no-jquery/no-global-selector": 2,
    "no-jquery/no-selector-prop": 2,
    "no-jquery/no-serialize": 2,
    "no-jquery/no-show": 2,
    "no-jquery/no-size": 2,
    "no-jquery/no-sizzle": 2,
    "no-jquery/no-slide": 2,
    "no-jquery/no-sub": 2,
    "no-jquery/no-submit": 2,
    "no-jquery/no-support": 2,
    "no-jquery/no-text": 2,
    "no-jquery/no-toggle": 2,
    "no-jquery/no-trigger": 2,
    "no-jquery/no-trim": 2,
    "no-jquery/no-type": 2,
    "no-jquery/no-unbind": 2,
    "no-jquery/no-undelegate": 2,
    "no-jquery/no-unique": 2,
    "no-jquery/no-unload-shorthand": 2,
    "no-jquery/no-val": 2,
    "no-jquery/no-when": 2,
    "no-jquery/no-wrap": 2
  }
}
```

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See LICENSE for details.
