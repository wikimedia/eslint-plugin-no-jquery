<!-- This file is built by build-readme.js. Do not edit it directly; edit README.md.template instead. -->
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

The pre-set profile `plugin:no-jquery/deprecated` includes all known deprecated and removed code, and is updated as new releases of jQuery come out. You can instead use profiles targetting specific versions of jQuery if you know the environment in which your code will operate. There is a profile for jQuery 3.5.x+ environments (`deprecated-3.5`), and profiles for other minor releases that include deprecations (`deprecated-3.4`, `deprecated-1.10` etc.). Deprecation profiles are cumulative, so they include all the rules for jQuery versions below them.

Alternatively, you can pick out rules individually (see below).

## ⚙️ Settings

The following global settings can be used under the `no-jquery` property to configure the linter:

* `constructorAliases` - An array of aliases for the jQuery constructor. Defaults to `[ "$", "jQuery" ]`.
* `variablePattern` - Regular expression pattern for matching jQuery variables. Defaults to `"^\\$."`. This pattern can be enforced with the [`no-jquery/variable-pattern`](docs/variable-pattern.md) rule.
* `collectionReturningPlugins` - An object describing the return types of jQuery plugins. Keys are plugin method names, and values can be one of:
  * `'always'` a plugin which always returns a jQuery collection.
    * e.g. `$bar = $foo.stop()`
  * `'accessor'` a plugin which only returns a jQuery collection when an argument is given.
    * e.g. `w = $foo.width()`, `$bar = $foo.width( 200 )`
  * `'valueAccessor'` a plugin which only returns a jQuery collection when more than one argument is given.
    * e.g. `w = $foo.css( 'width' )`, `$bar = $foo.css( 'width', '1em' )`
  * `'never'` (default) a plugin which never returns a jQuery collection.
    * e.g. `arr = $foo.toArray()`

```json
{
  "settings": {
    "no-jquery": {
        "constructorAliases": [ "$", "jQuery" ],
        "variablePattern": "^\\$.|^element$",
        "collectionReturningPlugins": {
          "datePicker": "always"
        }
    }
  },
  "plugins": [
    "no-jquery"
  ]
}
```

## 📖 Rules

Where rules are included in the pre-set profiles `slim` or `deprecated-X.X` it is indicated below.
* [`no-jquery/no-ajax`](docs/no-ajax.md) `slim`
* [`no-jquery/no-ajax-events`](docs/no-ajax-events.md) `slim`
* [`no-jquery/no-and-self`](docs/no-and-self.md) `1.8`
* [`no-jquery/no-animate`](docs/no-animate.md) `slim`
* [`no-jquery/no-animate-toggle`](docs/no-animate-toggle.md) `slim`
* [`no-jquery/no-attr`](docs/no-attr.md)
* [`no-jquery/no-bind`](docs/no-bind.md) `3.0`
* [`no-jquery/no-box-model`](docs/no-box-model.md) `1.3`
* [`no-jquery/no-browser`](docs/no-browser.md) `1.3`
* [`no-jquery/no-camel-case`](docs/no-camel-case.md) `3.3`
* [`no-jquery/no-class`](docs/no-class.md)
* [`no-jquery/no-class-state`](docs/no-class-state.md)
* [`no-jquery/no-clone`](docs/no-clone.md)
* [`no-jquery/no-closest`](docs/no-closest.md)
* [`no-jquery/no-constructor-attributes`](docs/no-constructor-attributes.md)
* [`no-jquery/no-contains`](docs/no-contains.md)
* [`no-jquery/no-context-prop`](docs/no-context-prop.md) `1.10`
* [`no-jquery/no-css`](docs/no-css.md)
* [`no-jquery/no-data`](docs/no-data.md)
* [`no-jquery/no-deferred`](docs/no-deferred.md)
* [`no-jquery/no-delegate`](docs/no-delegate.md) `3.0`
* [`no-jquery/no-each`](docs/no-each.md)
* [`no-jquery/no-each-collection`](docs/no-each-collection.md)
* [`no-jquery/no-each-util`](docs/no-each-util.md)
* [`no-jquery/no-error`](docs/no-error.md)
* [`no-jquery/no-error-shorthand`](docs/no-error-shorthand.md) `1.8`
* [`no-jquery/no-event-shorthand`](docs/no-event-shorthand.md) `3.3`
* [`no-jquery/no-extend`](docs/no-extend.md)
* [`no-jquery/no-fade`](docs/no-fade.md) `slim`
* [`no-jquery/no-filter`](docs/no-filter.md)
* [`no-jquery/no-find`](docs/no-find.md)
* [`no-jquery/no-find-collection`](docs/no-find-collection.md)
* [`no-jquery/no-find-util`](docs/no-find-util.md)
* [`no-jquery/no-fx-interval`](docs/no-fx-interval.md) `3.0`
* [`no-jquery/no-global-eval`](docs/no-global-eval.md)
* [`no-jquery/no-global-selector`](docs/no-global-selector.md)
* [`no-jquery/no-grep`](docs/no-grep.md)
* [`no-jquery/no-has`](docs/no-has.md)
* [`no-jquery/no-hold-ready`](docs/no-hold-ready.md) `3.2`
* [`no-jquery/no-html`](docs/no-html.md)
* [`no-jquery/no-in-array`](docs/no-in-array.md)
* [`no-jquery/no-is`](docs/no-is.md)
* [`no-jquery/no-is-array`](docs/no-is-array.md) `3.2`
* [`no-jquery/no-is-empty-object`](docs/no-is-empty-object.md)
* [`no-jquery/no-is-function`](docs/no-is-function.md) `3.3`
* [`no-jquery/no-is-numeric`](docs/no-is-numeric.md) `3.3`
* [`no-jquery/no-is-plain-object`](docs/no-is-plain-object.md)
* [`no-jquery/no-is-window`](docs/no-is-window.md) `3.3`
* [`no-jquery/no-live`](docs/no-live.md) `1.7`
* [`no-jquery/no-load`](docs/no-load.md) `slim`
* [`no-jquery/no-load-shorthand`](docs/no-load-shorthand.md) `1.8`
* [`no-jquery/no-map`](docs/no-map.md)
* [`no-jquery/no-map-collection`](docs/no-map-collection.md)
* [`no-jquery/no-map-util`](docs/no-map-util.md)
* [`no-jquery/no-merge`](docs/no-merge.md)
* [`no-jquery/no-node-name`](docs/no-node-name.md) `3.2`
* [`no-jquery/no-noop`](docs/no-noop.md)
* [`no-jquery/no-now`](docs/no-now.md) `3.3`
* [`no-jquery/no-on-ready`](docs/no-on-ready.md) `1.8`
* [`no-jquery/no-param`](docs/no-param.md)
* [`no-jquery/no-parent`](docs/no-parent.md)
* [`no-jquery/no-parents`](docs/no-parents.md)
* [`no-jquery/no-parse-html`](docs/no-parse-html.md)
* [`no-jquery/no-parse-html-literal`](docs/no-parse-html-literal.md)
* [`no-jquery/no-parse-json`](docs/no-parse-json.md) `3.0`
* [`no-jquery/no-parse-xml`](docs/no-parse-xml.md) `slim`
* [`no-jquery/no-prop`](docs/no-prop.md)
* [`no-jquery/no-proxy`](docs/no-proxy.md) `3.3`
* [`no-jquery/no-ready`](docs/no-ready.md)
* [`no-jquery/no-ready-shorthand`](docs/no-ready-shorthand.md) `3.0`
* [`no-jquery/no-selector-prop`](docs/no-selector-prop.md) `1.7`
* [`no-jquery/no-serialize`](docs/no-serialize.md)
* [`no-jquery/no-size`](docs/no-size.md) `1.8`
* [`no-jquery/no-sizzle`](docs/no-sizzle.md) `3.4`
* [`no-jquery/no-slide`](docs/no-slide.md) `slim`
* [`no-jquery/no-sub`](docs/no-sub.md) `1.7`
* [`no-jquery/no-submit`](docs/no-submit.md)
* [`no-jquery/no-support`](docs/no-support.md) `1.9`
* [`no-jquery/no-text`](docs/no-text.md)
* [`no-jquery/no-trigger`](docs/no-trigger.md)
* [`no-jquery/no-trim`](docs/no-trim.md) `3.5`
* [`no-jquery/no-type`](docs/no-type.md) `3.3`
* [`no-jquery/no-unique`](docs/no-unique.md) `3.0`
* [`no-jquery/no-unload-shorthand`](docs/no-unload-shorthand.md) `1.8`
* [`no-jquery/no-val`](docs/no-val.md)
* [`no-jquery/no-visibility`](docs/no-visibility.md)
* [`no-jquery/no-when`](docs/no-when.md)
* [`no-jquery/no-wrap`](docs/no-wrap.md)
* [`no-jquery/variable-pattern`](docs/variable-pattern.md)

### ⚠️ Deprecated

* [`no-jquery/no-die`](docs/no-die.md) (use [`no-jquery/no-live`](docs/no-live.md))
* [`no-jquery/no-hide`](docs/no-hide.md) (use [`no-jquery/no-visibility`](docs/no-visibility.md))
* [`no-jquery/no-show`](docs/no-show.md) (use [`no-jquery/no-visibility`](docs/no-visibility.md))
* [`no-jquery/no-toggle`](docs/no-toggle.md) (use [`no-jquery/no-visibility`](docs/no-visibility.md))
* [`no-jquery/no-unbind`](docs/no-unbind.md) (use [`no-jquery/no-bind`](docs/no-bind.md))
* [`no-jquery/no-undelegate`](docs/no-undelegate.md) (use [`no-jquery/no-delegate`](docs/no-delegate.md))

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
