# eslint-plugin-no-jquery

Disallow jQuery functions, with suggestions for native equivalents where possible.

Originally a fork of [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery/).

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

Add `no-jquery` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "extends": "plugin:no-jquery/deprecated",
  "plugins": [
    "no-jquery"
  ]
}
```

The pre-set profile `plugin:no-jquery/deprecated` includes all known deprecated and removed code, and is updated as new releases of jQuery come out. You can instead use profiles targetting specific versions of jQuery if you know the environment in which your code will operate. There are profiles for jQuery 3.3.x+ environments (`deprecated-3.3`), 3.0.x+ (`deprecated-3.0`), and several others for completeness.

Alternatively, you can pick out rules individually:

```json
{
  "plugins": [
    "no-jquery"
  ],
  "rules": {
    "no-jquery/no-ajax": "error",
    "no-jquery/no-ajax-events": "error",
    "no-jquery/no-and-self": "error",
    "no-jquery/no-animate": [ "error", { "allowScroll": true } ],
    "no-jquery/no-animate-toggle": "error",
    "no-jquery/no-attr": "error",
    "no-jquery/no-bind": "error",
    "no-jquery/no-box-model": "error",
    "no-jquery/no-browser": "error",
    "no-jquery/no-class": "error",
    "no-jquery/no-class-state": "error",
    "no-jquery/no-clone": "error",
    "no-jquery/no-closest": "error",
    "no-jquery/no-context-prop": "error",
    "no-jquery/no-css": "error",
    "no-jquery/no-data": "error",
    "no-jquery/no-deferred": "error",
    "no-jquery/no-delegate": "error",
    "no-jquery/no-die": "error",
    "no-jquery/no-each": "error",
    "no-jquery/no-each-collection": "error",
    "no-jquery/no-each-util": "error",
    "no-jquery/no-error-shorthand": "error",
    "no-jquery/no-event-shorthand": "error",
    "no-jquery/no-extend": "error",
    "no-jquery/no-fade": "error",
    "no-jquery/no-filter": "error",
    "no-jquery/no-find": "error",
    "no-jquery/no-fx-interval": "error",
    "no-jquery/no-global-eval": "error",
    "no-jquery/no-grep": "error",
    "no-jquery/no-has": "error",
    "no-jquery/no-hide": "error",
    "no-jquery/no-hold-ready": "error",
    "no-jquery/no-html": "error",
    "no-jquery/no-in-array": "error",
    "no-jquery/no-is-array": "error",
    "no-jquery/no-is-function": "error",
    "no-jquery/no-is-numeric": "error",
    "no-jquery/no-is-window": "error",
    "no-jquery/no-is": "error",
    "no-jquery/no-live": "error",
    "no-jquery/no-load": "error",
    "no-jquery/no-load-shorthand": "error",
    "no-jquery/no-map": "error",
    "no-jquery/no-map-collection": "error",
    "no-jquery/no-map-util": "error",
    "no-jquery/no-merge": "error",
    "no-jquery/no-noop": "error",
    "no-jquery/no-now": "error",
    "no-jquery/no-on-ready": "error",
    "no-jquery/no-param": "error",
    "no-jquery/no-parent": "error",
    "no-jquery/no-parents": "error",
    "no-jquery/no-parse-html": "error",
    "no-jquery/no-parse-html-literal": "error",
    "no-jquery/no-parse-json": "error",
    "no-jquery/no-prop": "error",
    "no-jquery/no-proxy": "error",
    "no-jquery/no-ready": "error",
    "no-jquery/no-ready-shorthand": "error",
    "no-jquery/no-global-selector": "error",
    "no-jquery/no-selector-prop": "error",
    "no-jquery/no-serialize": "error",
    "no-jquery/no-show": "error",
    "no-jquery/no-size": "error",
    "no-jquery/no-sizzle": "error",
    "no-jquery/no-slide": "error",
    "no-jquery/no-sub": "error",
    "no-jquery/no-submit": "error",
    "no-jquery/no-support": "error",
    "no-jquery/no-text": "error",
    "no-jquery/no-toggle": "error",
    "no-jquery/no-trigger": "error",
    "no-jquery/no-trim": "error",
    "no-jquery/no-type": "error",
    "no-jquery/no-unbind": "error",
    "no-jquery/no-undelegate": "error",
    "no-jquery/no-unique": "error",
    "no-jquery/no-unload-shorthand": "error",
    "no-jquery/no-val": "error",
    "no-jquery/no-when": "error",
    "no-jquery/no-wrap": "error"
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
