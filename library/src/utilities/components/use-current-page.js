import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

// Function is useful is there is content that is only meant to
// show up on the page but not when it has child content
export default function useCurrentPageContent() {
    const router = useRouter()

    // Grabs domain after the origin
    const page_path = location.href.substring(location.origin.length)

    const current_page = ref(true)

    watch(router.currentRoute, (new_route) => {
        current_page.value = page_path === new_route ? true : false
    })

    return current_page
}