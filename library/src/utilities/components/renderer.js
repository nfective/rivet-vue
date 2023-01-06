import { h } from "vue"

export default function renderer(slots){ return Array.isArray(slots) ? slots.map(slot => h(slot)) : slots }