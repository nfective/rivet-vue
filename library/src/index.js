import * as components from './exported-components.js'

export default {
    install: (app, options) => {
        for(const [key, value] of Object.entries(components))
        {
            app.component(key, value)
        }
    }
}
