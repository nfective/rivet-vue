import RvtAccordion from './components/accordion/RvtAccordion.vue'
import RvtAccordionSummary from './components/accordion/RvtAccordionSummary.vue'

export default {
	install: (app, options) => {
		app.component('RvtAccordion', RvtAccordion)
		app.component('RvtAccordionSummary', RvtAccordionSummary)
	}
}