<script setup>
    import { watch, watchEffect, inject, useSlots, useAttrs } from 'vue'
    import { common_props, dropdown_props } from ':/macros/props.js'
    import useId from ':/composables/use-id.js'
    import useToggle from ':/composables/use-toggle.js'
    import renderer from ':/components/renderer.js'

    const hierarchy = inject('hierarchy', null)
    if((hierarchy && !hierarchy.includes('rvt-accordion')) || hierarchy === null) if(!hierarchy.includes('rvt-accordion')) console.error('rvt-accordion-summary not wrapped by a rvt-accordion component')

    const props = defineProps({
        ...common_props,
        ...dropdown_props
    })

    const id = props.id ?? `accordion-summary-${ useId() }`

    let render

    const slots = useSlots()

    if(slots.default) render = () => renderer(slots.default())
    
    const attrs = useAttrs()

    /* 
        On the initialization of the panel, it has to have the data-rvt-accordion-panel-init
        present on the panel to be open. A new variable is used because it does not need to
        be reactive and should only exist once
    */
    const { is_open, toggle } = { ...useToggle(props.open) }

    const emits = defineEmits(["accordion"])

    watch(() => props.open, () => is_open.value = !is_open.value)

    watchEffect(() => emits('accordion', { 'id': id, 'state': is_open.value ? 'open' : 'closed' }))

    const label = props.label ?? 'Generic accordion summary label'

    if(!props.label) console.warn("Accordion summary is missing the label prop")

</script>

<script>
    export default {
        // Turns off extraneous non-prop attributes warning in console
        inheritAttrs: false
    }
</script>

<template>
    <div :id="id" :class="props.class" v-bind="attrs">
        <h3 class="rvt-accordion__summary">
        <button
            :id="id + '-label'"
            class="rvt-accordion__toggle"
            :data-rvt-accordion-trigger="id + '-panel'"
            :aria-expanded="is_open ? 'true' : 'false'"
            @click="toggle($event)"
            @keypress="toggle($event)"
        >
            <span class="rvt-accordion__toggle-text">{{ label }}</span>
            <div class="rvt-accordion__toggle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path class="rvt-accordion__icon-bar" d="M8,15a1,1,0,0,1-1-1V2A1,1,0,0,1,9,2V14A1,1,0,0,1,8,15Z" />
                        <path d="M14,9H2A1,1,0,0,1,2,7H14a1,1,0,0,1,0,2Z" />
                    </g>
                </svg>
            </div>
        </button>
    </h3>
    <!-- :data-rvt-accordion-panel-init="props.open ? '' : null" :hidden="is_open === false ? '' : null" -->
    <div :id="id + '-panel'" class="rvt-accordion__panel" :aria-labelledby="id + '-label'" :data-rvt-accordion-panel="id + '-panel'" :data-rvt-accordion-panel-init="is_open ? '' : null" :hidden="!is_open ? '' : null">
        <div class="rvt-m-all-remove">
            <span v-if="!slots.default">Place holder for accordion content</span>
            <render v-else />
        </div>
    </div>
    </div>
</template>