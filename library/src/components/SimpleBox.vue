<script setup>
    const props = defineProps({
        class: String
    })
</script>

<template>
    <div class="classy" :class="props.class">
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