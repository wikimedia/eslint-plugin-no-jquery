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
    "no-jquery/ajax": "error",
    "no-jquery/ajax-events": "error",
    "no-jquery/and-self": "error",
    "no-jquery/animate": "error",
    "no-jquery/animate-toggle": "error",
    "no-jquery/attr": "error",
    "no-jquery/bind": "error",
    "no-jquery/box-model": "error",
    "no-jquery/browser": "error",
    "no-jquery/class": "error",
    "no-jquery/clone": "error",
    "no-jquery/closest": "error",
    "no-jquery/context-prop": "error",
    "no-jquery/css": "error",
    "no-jquery/data": "error",
    "no-jquery/deferred": "error",
    "no-jquery/delegate": "error",
    "no-jquery/die": "error",
    "no-jquery/each": "error",
    "no-jquery/each-collection": "error",
    "no-jquery/each-util": "error",
    "no-jquery/error-shorthand": "error",
    "no-jquery/event-shorthand": "error",
    "no-jquery/extend": "error",
    "no-jquery/fade": "error",
    "no-jquery/filter": "error",
    "no-jquery/find": "error",
    "no-jquery/fx-interval": "error",
    "no-jquery/global-eval": "error",
    "no-jquery/grep": "error",
    "no-jquery/has": "error",
    "no-jquery/hide": "error",
    "no-jquery/hold-ready": "error",
    "no-jquery/html": "error",
    "no-jquery/in-array": "error",
    "no-jquery/is-array": "error",
    "no-jquery/is-function": "error",
    "no-jquery/is-numeric": "error",
    "no-jquery/is-window": "error",
    "no-jquery/is": "error",
    "no-jquery/live": "error",
    "no-jquery/load": "error",
    "no-jquery/load-shorthand": "error",
    "no-jquery/map": "error",
    "no-jquery/map-collection": "error",
    "no-jquery/map-util": "error",
    "no-jquery/merge": "error",
    "no-jquery/noop": "error",
    "no-jquery/now": "error",
    "no-jquery/on-ready": "error",
    "no-jquery/param": "error",
    "no-jquery/parent": "error",
    "no-jquery/parents": "error",
    "no-jquery/parse-html": "error",
    "no-jquery/parse-html-literal": "error",
    "no-jquery/parse-json": "error",
    "no-jquery/prop": "error",
    "no-jquery/proxy": "error",
    "no-jquery/ready": "error",
    "no-jquery/ready-shorthand": "error",
    "no-jquery/global-selector": "error",
    "no-jquery/selector-prop": "error",
    "no-jquery/serialize": "error",
    "no-jquery/show": "error",
    "no-jquery/size": "error",
    "no-jquery/sizzle": "error",
    "no-jquery/slide": "error",
    "no-jquery/sub": "error",
    "no-jquery/submit": "error",
    "no-jquery/support": "error",
    "no-jquery/text": "error",
    "no-jquery/toggle": "error",
    "no-jquery/trigger": "error",
    "no-jquery/trim": "error",
    "no-jquery/type": "error",
    "no-jquery/unbind": "error",
    "no-jquery/undelegate": "error",
    "no-jquery/unique": "error",
    "no-jquery/unload-shorthand": "error",
    "no-jquery/val": "error",
    "no-jquery/when": "error",
    "no-jquery/wrap": "error"
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
