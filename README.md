# eslint-plugin-no-jquery

Disallow jQuery functions, with suggestions for native equivalents where possible.

Originally a fork of [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery/).

## ⬇️ Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm install eslint --save-dev
```

Next, install `eslint-plugin-no-jquery`:

```sh
npm install eslint-plugin-no-jquery --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-jquery` globally.

## 🛠️ Usage

Add `no-jquery` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "extends": "plugin:no-jquery/deprecated",
  "plugins": [
    "no-jquery"
  ]
}
```

The pre-set profile `plugin:no-jquery/deprecated` includes all known deprecated and removed code, and is updated as new releases of jQuery come out. You can instead use profiles targetting specific versions of jQuery if you know the environment in which your code will operate. There are profiles for jQuery 3.4.x+ environments (`deprecated-3.4`), 3.0.x+ (`deprecated-3.0`), and several others for completeness. Deprecation profiles are cumulative, so include all the rules for jQuery versions below them.

Alternatively, you can pick out rules individually (see below).

## ⚙️ Settings

The following global settings can be used under the `no-jquery` property to configure the linter:

* `constructorAliases` - An array of aliases for the jQuery constructor. Defaults to `[ "$", "jQuery" ]`.
* `variablePattern` - Regular expression pattern for matching jQuery variables. Defaults to `"^\\$."`. This pattern can be enforced with the [`no-jquery/variable-pattern`](docs/variable-pattern.md) rule.

```json
{
  "settings": {
    "no-jquery": {
        "constructorAliases": [ "$", "jQuery" ],
        "variablePattern": "^\\$.|^element$"
    }
  },
  "plugins": [
    "no-jquery"
  ]
}
```

## 📖 Rules

* [`no-jquery/variable-pattern`](docs/variable-pattern.md)
* [`no-jquery/no-ajax`](docs/no-ajax.md)
* [`no-jquery/no-ajax-events`](docs/no-ajax-events.md)
* [`no-jquery/no-and-self`](docs/no-and-self.md)
* [`no-jquery/no-animate`](docs/no-animate.md)
* [`no-jquery/no-animate-toggle`](docs/no-animate-toggle.md)
* [`no-jquery/no-attr`](docs/no-attr.md)
* [`no-jquery/no-bind`](docs/no-bind.md)
* [`no-jquery/no-box-model`](docs/no-box-model.md)
* [`no-jquery/no-browser`](docs/no-browser.md)
* [`no-jquery/no-camel-case`](docs/no-camel-case.md)
* [`no-jquery/no-class`](docs/no-class.md)
* [`no-jquery/no-class-state`](docs/no-class-state.md)
* [`no-jquery/no-clone`](docs/no-clone.md)
* [`no-jquery/no-closest`](docs/no-closest.md)
* [`no-jquery/no-constructor-attributes`](docs/no-constructor-attributes.md)
* [`no-jquery/no-contains`](docs/no-contains.md)
* [`no-jquery/no-context-prop`](docs/no-context-prop.md)
* [`no-jquery/no-css`](docs/no-css.md)
* [`no-jquery/no-data`](docs/no-data.md)
* [`no-jquery/no-deferred`](docs/no-deferred.md)
* [`no-jquery/no-delegate`](docs/no-delegate.md)
* [`no-jquery/no-die`](docs/no-die.md)
* [`no-jquery/no-each`](docs/no-each.md)
* [`no-jquery/no-each-collection`](docs/no-each-collection.md)
* [`no-jquery/no-each-util`](docs/no-each-util.md)
* [`no-jquery/no-error`](docs/no-error.md)
* [`no-jquery/no-error-shorthand`](docs/no-error-shorthand.md)
* [`no-jquery/no-event-shorthand`](docs/no-event-shorthand.md)
* [`no-jquery/no-extend`](docs/no-extend.md)
* [`no-jquery/no-fade`](docs/no-fade.md)
* [`no-jquery/no-filter`](docs/no-filter.md)
* [`no-jquery/no-find`](docs/no-find.md)
* [`no-jquery/no-fx-interval`](docs/no-fx-interval.md)
* [`no-jquery/no-global-eval`](docs/no-global-eval.md)
* [`no-jquery/no-grep`](docs/no-grep.md)
* [`no-jquery/no-has`](docs/no-has.md)
* [`no-jquery/no-hold-ready`](docs/no-hold-ready.md)
* [`no-jquery/no-html`](docs/no-html.md)
* [`no-jquery/no-in-array`](docs/no-in-array.md)
* [`no-jquery/no-is-array`](docs/no-is-array.md)
* [`no-jquery/no-is-empty-object`](docs/no-is-empty-object.md)
* [`no-jquery/no-is-plain-object`](docs/no-is-plain-object.md)
* [`no-jquery/no-is-function`](docs/no-is-function.md)
* [`no-jquery/no-is-numeric`](docs/no-is-numeric.md)
* [`no-jquery/no-is-window`](docs/no-is-window.md)
* [`no-jquery/no-is`](docs/no-is.md)
* [`no-jquery/no-live`](docs/no-live.md)
* [`no-jquery/no-load`](docs/no-load.md)
* [`no-jquery/no-load-shorthand`](docs/no-load-shorthand.md)
* [`no-jquery/no-map`](docs/no-map.md)
* [`no-jquery/no-map-collection`](docs/no-map-collection.md)
* [`no-jquery/no-map-util`](docs/no-map-util.md)
* [`no-jquery/no-merge`](docs/no-merge.md)
* [`no-jquery/no-node-name`](docs/no-node-name.md)
* [`no-jquery/no-noop`](docs/no-noop.md)
* [`no-jquery/no-now`](docs/no-now.md)
* [`no-jquery/no-on-ready`](docs/no-on-ready.md)
* [`no-jquery/no-param`](docs/no-param.md)
* [`no-jquery/no-parent`](docs/no-parent.md)
* [`no-jquery/no-parents`](docs/no-parents.md)
* [`no-jquery/no-parse-html`](docs/no-parse-html.md)
* [`no-jquery/no-parse-html-literal`](docs/no-parse-html-literal.md)
* [`no-jquery/no-parse-json`](docs/no-parse-json.md)
* [`no-jquery/no-parse-xml`](docs/no-parse-xml.md)
* [`no-jquery/no-prop`](docs/no-prop.md)
* [`no-jquery/no-proxy`](docs/no-proxy.md)
* [`no-jquery/no-ready`](docs/no-ready.md)
* [`no-jquery/no-ready-shorthand`](docs/no-ready-shorthand.md)
* [`no-jquery/no-global-selector`](docs/no-global-selector.md)
* [`no-jquery/no-selector-prop`](docs/no-selector-prop.md)
* [`no-jquery/no-serialize`](docs/no-serialize.md)
* [`no-jquery/no-size`](docs/no-size.md)
* [`no-jquery/no-sizzle`](docs/no-sizzle.md)
* [`no-jquery/no-slide`](docs/no-slide.md)
* [`no-jquery/no-sub`](docs/no-sub.md)
* [`no-jquery/no-submit`](docs/no-submit.md)
* [`no-jquery/no-support`](docs/no-support.md)
* [`no-jquery/no-text`](docs/no-text.md)
* [`no-jquery/no-trigger`](docs/no-trigger.md)
* [`no-jquery/no-trim`](docs/no-trim.md)
* [`no-jquery/no-type`](docs/no-type.md)
* [`no-jquery/no-unbind`](docs/no-unbind.md)
* [`no-jquery/no-undelegate`](docs/no-undelegate.md)
* [`no-jquery/no-unique`](docs/no-unique.md)
* [`no-jquery/no-unload-shorthand`](docs/no-unload-shorthand.md)
* [`no-jquery/no-val`](docs/no-val.md)
* [`no-jquery/no-visibility`](docs/no-visibility.md)
* [`no-jquery/no-when`](docs/no-when.md)
* [`no-jquery/no-wrap`](docs/no-wrap.md)

### ⚠️ Deprecated
* [`no-jquery/no-hide`](docs/no-hide.md)
* [`no-jquery/no-show`](docs/no-show.md)
* [`no-jquery/no-toggle`](docs/no-toggle.md)

## 🤖 Development

```sh
npm install
npm test
```

To update documentation after modifying a rule or its tests, use

```sh
npm run doc
```

To run a specific test or tests:

```sh
npm run testpath tests/no-ajax
```

## ⚖️ License

Distributed under the MIT license. See LICENSE for details.
