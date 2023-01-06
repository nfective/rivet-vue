import RvtAccordion from './components/accordion/RvtAccordion.vue'
import RvtAccordionSummary from './components/accordion/RvtAccordionSummary.vue'
import RvtTestComponent from './components/RvtTestComponent.vue'
import TestComponent from './components/TestComponent.vue'

export default {
	install: (app, options) => {
		app.component('RvtAccordion', RvtAccordion)
		app.component('RvtAccordionSummary', RvtAccordionSummary)
		app.component('RvtTestComponent', RvtTestComponent)
		app.component('TestComponent', TestComponent)
	}
}