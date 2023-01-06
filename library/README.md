# Rivet-vue

## Dependencies
#### Vue 3.2.45 vue.global(.prod).js
#### Rivet 2.2.0 JS
#### Rivet 2.2.0 CSS




## CJS (CommonJS) / ESM (EcmaScript Modules)
#### Usage
###### Rivet-Vue is being used in a vue application where the application has a root vue component and other vue components
###### nested within it. A common scenario would be a vue application created by vite, which is a SPA (single page application)

#### Setup

File: main.js

```js
// ESM / UMD syntax
import { createApp } from 'vue'
import App from './App.vue'
import RivetVue from 'rivet-vue'
import { init } from 'rivet-vue/dist/rivet@2.2.0.js'
import 'rivet-vue/dist/rivet@2.2.0.css'

init()

const app = createApp(App)
app.use(RivetVue)
app.mount('#app')
```




## EM (Embedded)
#### Usage
###### Rivet-Vue is being used in a vue application where the application DOES NOT have a root vue component. The components
###### are globally available inside the HTML as long as they are nested within where the vue application is mounted. A common
###### scenario would be a regular HTML, (non Razor page) .Net, or NodeJS page.

#### Setup

File: app.js

```js
// The embedded version is a special format where the Vue instance must be available
// rivet-vue.em.js must be moved from node_modules/rivet-vue/dist/rivet-vue.em.js
// directory to the public directory because it is not exposed as an entry point
// in rivet-vue
import RivetVue from '/js/rivet-vue.em.js'

const app = Vue.createApp({})
app.use(RivetVue)
app.mount('#app')

```

File: index.html

```html
<!doctype html>
<html>
    <head>
        <!-- Important: rivet@2.2.0.css must be moved from node_modules/rivet-vue/dist   -->
        <!--            directory to a public directory because it is not used in        -->
        <!--            in the context of an es module even though app.js is a module    -->
        <!--            type                                                             -->
        <!-- This is the minified CDN version                                            -->
        <!-- "https://unpkg.com/rivet-core@2.2.0/css/rivet.min.css"                      -->
        <link type="text/css" rel="stylesheet" href="/css/rivet@2.2.0.css" />
        <!-- Important: This cannot be moved into the app.js                             -->
        <!-- Important: Vue must be moved from node_modules/rivet-vue/dist directory     -->
        <!--            to a public directory because it is not used in the context      -->
        <!--            of an es module even though app.js is a module type.             -->
        <!--            It provides the global instance of Vue that is needed by         -->
        <!--            rivet-vue.em.js                                                  -->
        <!-- Production build -->
        <!-- The vue.global.prod.js from node_modules/vue/dist -->
        <script src="/vue@3.2.45.js"></script>
        <!-- Development build -->
        <!-- The vue.global.js from node_modules/vue/dist -->
        <!-- <script src="/vue@3.2.45.dev.js"></script> -->
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="/js/app.js"></script>
        <!-- Important: rivet@2.2.0.js must be moved from node_modules/rivet-vue/dist    -->
        <!--            directory to a public directory because it is not used in        -->
        <!--            in the context of an es module even though app.js is a module    -->
        <!--            type                                                             -->
        <!-- This is the minified CDN version                                            -->
        <!-- "https://unpkg.com/rivet-core@2.2.0/js/rivet.min.js"                        -->
        <script src="/js/rivet@2.2.0.js"></script>
        <script>
            Rivet.init()
        </script>
    </body>
</html>
```

## Side note
#### If you run this project with `npm run dev` you will get a warning about it not being able to auto-determine entry
#### point. This can be ignored. This project needs to run in a separate terminal then the one used for tests for
#### hot-reloading to work