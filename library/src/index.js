import SimpleBox from "./components/SimpleBox.vue"

export default {
    install: (app, options) => {
        app.component("SimpleBox", SimpleBox)
    }
}