import * as components from './exported-components.js'

const pascalCaseToHyphens = (string) => string
// Look for long acronyms and filter out the last letter
.replace(/([A-Z]+)([A-Z][a-z])/g, ' $1-$2')
// Look for lower-case letters followed by upper-case letters
.replace(/([a-zd])([A-Z])/g, '$1-$2')
// Look for lower-case letters followed by numbers
.replace(/([a-zA-Z])(d)/g, '$1-$2')
// Remove any white space left around the word
.trim()
// Force lowercase on component names
.toLowerCase()

export default {
    install: (app, options) => {
        for(const [key, value] of Object.entries(components))
        {
            app.component(pascalCaseToHyphens(key), value)
        }
    }
}
