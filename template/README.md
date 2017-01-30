# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
yarn install

# copy local config (!important)
# cp src/env/config.js src/env/config.local.js
yarn run config

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
