<template>
  <button
    class="bg-brand-700 hover:bg-brand-600 text-white px-3 py-2 text-sm font-bold rounded-xl flex flex-no-wrap whitespace-nowrap items-center gap-3 transition-all ease-in-out duration-200"
    :class="{
      'lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base': !small,
      'lg:px-3 lg:py-2 text-xs lg:text-sm': small,
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  small?: boolean
}>()
</script>
