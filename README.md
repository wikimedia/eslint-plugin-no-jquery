# eslint-plugin-jquery

Disallow jQuery functions with native equivalents. This is the Wikimedia-maintained fork of [this project](https://www.npmjs.com/package/eslint-plugin-jquery).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-jquery`:

```
$ npm install eslint-plugin-jquery --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jquery` globally.

## Usage

Add `jquery` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "extends": "plugin:jquery/deprecated",
  "plugins": [
    "jquery"
  ]
}
```

The pre-set profile `plugin:jquery/deprecated` includes all known deprecated and removed code, and is updated as new releases of jQuery come out. You can instead use profiles targetting specific versions of jQuery if you know the environment in which your code will operate. There are profiles for jQuery 3.3.x+ environments (`deprecated-3.3`), 3.0.x+ (`deprecated-3.0`), and several others for completeness.

Alternatively, you can pick out rules individually:

```json
{
  "plugins": [
    "jquery"
  ],
  "rules": {
    "jquery/no-ajax": 2,
    "jquery/no-ajax-events": 2,
    "jquery/no-and-self": 2,
    "jquery/no-animate": 2,
    "jquery/no-animate-toggle": 2,
    "jquery/no-attr": 2,
    "jquery/no-bind": 2,
    "jquery/no-box-model": 2,
    "jquery/no-browser": 2,
    "jquery/no-class": 2,
    "jquery/no-clone": 2,
    "jquery/no-closest": 2,
    "jquery/no-context-prop": 2,
    "jquery/no-css": 2,
    "jquery/no-data": 2,
    "jquery/no-deferred": 2,
    "jquery/no-delegate": 2,
    "jquery/no-die": 2,
    "jquery/no-each": 2,
    "jquery/no-each-collection": 2,
    "jquery/no-each-util": 2,
    "jQuery/no-error-shorthand": 2,
    "jquery/no-event-shorthand": 2,
    "jquery/no-extend": 2,
    "jquery/no-fade": 2,
    "jquery/no-filter": 2,
    "jquery/no-find": 2,
    "jquery/no-fx-interval": 2,
    "jquery/no-global-eval": 2,
    "jquery/no-grep": 2,
    "jquery/no-has": 2,
    "jquery/no-hide": 2,
    "jquery/no-html": 2,
    "jquery/no-in-array": 2,
    "jquery/no-is-array": 2,
    "jquery/no-is-function": 2,
    "jquery/no-is-numeric": 2,
    "jquery/no-is-window": 2,
    "jquery/no-is": 2,
    "jquery/no-live": 2,
    "jquery/no-load": 2,
    "jquery/no-load-shorthand": 2,
    "jquery/no-map": 2,
    "jquery/no-map-collection": 2,
    "jquery/no-map-util": 2,
    "jquery/no-merge": 2,
    "jquery/no-noop": 2,
    "jquery/no-now": 2,
    "jquery/no-param": 2,
    "jquery/no-parent": 2,
    "jquery/no-parents": 2,
    "jquery/no-parse-html": 2,
    "jquery/no-parse-html-literal": 2,
    "jquery/no-parse-json": 2,
    "jquery/no-prop": 2,
    "jquery/no-proxy": 2,
    "jquery/no-ready": 2,
    "jquery/no-ready-shorthand": 2,
    "jquery/no-global-selector": 2,
    "jquery/no-selector-prop": 2,
    "jquery/no-serialize": 2,
    "jquery/no-show": 2,
    "jquery/no-size": 2,
    "jquery/no-sizzle": 2,
    "jquery/no-slide": 2,
    "jquery/no-submit": 2,
    "jquery/no-support": 2,
    "jquery/no-text": 2,
    "jquery/no-toggle": 2,
    "jquery/no-trigger": 2,
    "jquery/no-trim": 2,
    "jquery/no-type": 2,
    "jquery/no-unbind": 2,
    "jquery/no-undelegate": 2,
    "jquery/no-unique": 2,
    "jquery/no-unload-shorthand": 2,
    "jquery/no-val": 2,
    "jquery/no-when": 2,
    "jquery/no-wrap": 2
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
