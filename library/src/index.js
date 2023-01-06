import RvtAccordion from 'D:/rivet-vue/library/src/components/accordion/RvtAccordion.vue'
import RvtAccordionSummary from 'D:/rivet-vue/library/src/components/accordion/RvtAccordionSummary.vue'
import RvtTest from './components/RvtTest.vue'

export default {
	install: (app, options) => {
		app.component('RvtAccordion', RvtAccordion)
		app.component('RvtAccordionSummary', RvtAccordionSummary)
		app.component('RvtTest', RvtTest)
	}
}