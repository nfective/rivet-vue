<script setup>
    import { provide, inject, useSlots, useAttrs } from 'vue'
    import { common_props } from ':/macros/props.js'
    import useId from ':/composables/use-id.js'
    import renderer from ':/components/renderer.js'

    const hierarchy = inject('hierarchy', null)
    if(hierarchy) {
        provide('hierarchy', [...inject('hierarchy'), 'rvt-accordion'])
    }
    else
    {
        provide('hierarchy', ['rvt-accordion'])
    }

    const props = defineProps({
        ...common_props
    })

    const id = props.id ?? `accordion-${ useId() }`

    let render

    const slots = useSlots()

    if(slots.default) render = () => renderer(slots.default())
    
    const attrs = useAttrs()

</script>

<template>
    <div :id="props.id" class="rvt-accordion" data-rvt-accordion="test-accordion" v-bind="attrs">
        <div class="rvt-text-center" v-if="!slots.default">Placeholder for rvt-accordion-summary components.</div>
        <render v-else />
    </div>
</template>