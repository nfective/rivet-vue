<script setup>
    const props = defineProps({
        name: String
    })
</script>

<template>
    <div class="classy">
        <slot />
    </div>
</template>

<style scoped>
    .classy {
        border: 2px solid red;
        border-radius: 3px;
        padding: 2em 4em
    }
</style>