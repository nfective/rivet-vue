import RvtAccordion from './components/accordion/RvtAccordion.vue'
import RvtAccordionSummary from './components/accordion/RvtAccordionSummary.vue'
import RvtTestComponent from './components/accordion/RvtTestComponent.vue'

export default {
	install: (app, options) => {
		app.component('RvtAccordion', RvtAccordion)
		app.component('RvtAccordionSummary', RvtAccordionSummary)
		app.component('RvtTestComponent', RvtTestComponent)
	}
}