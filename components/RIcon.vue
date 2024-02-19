<template>
  <ClientOnly>
    <font-awesome-icon :icon="`fa-solid fa-${icon}`" />
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>
