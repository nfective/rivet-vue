// use-toggleable creates toggle function that when hit with a space or click,  it 
// triggers an emit on the component. The use-toggleable composable is do reduce
// the need to reuse code in all components that have the dropdown functionality.
// The composable is needed because it is a vue implementation of the emit event
import { shallowRef } from 'vue'
import { useDebounceFn } from '@vueuse/core'

export default function useToggle(is_open) {

    const state = shallowRef(is_open)

    const _toggle = (event) => { 
        switch(true)
        {
            case event.type === 'click':
                state.value = !state.value
            break;
            case event.type === 'keypress' && (event.code === 'Space' || event.charCode === 32 || event.which === 32):
                state.value = !state.value
            break;
        }
    }

    const toggle = useDebounceFn((event) => {
        _toggle(event)
    }, 50)

    return {
        is_open: state,
        toggle
    }
}