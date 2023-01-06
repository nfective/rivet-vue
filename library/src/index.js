import RvtAccordion from 'D:/rivet-vue/library/src/components/accordion/RvtAccordion.vue'
import RvtAccordionSummary from 'D:/rivet-vue/library/src/components/accordion/RvtAccordionSummary.vue'
import RvtTestComponent from './components/accordion/RvtTestComponent.vue'

export default {
	install: (app, options) => {
		app.component('RvtAccordion', RvtAccordion)
		app.component('RvtAccordionSummary', RvtAccordionSummary)
		app.component('RvtTestComponent', RvtTestComponent)
	}
}