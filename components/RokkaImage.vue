<template>
  <picture>
    <source
      v-for="(stackName, mediaQuery) in selectedStack"
      :key="`${stack}_${image}_${stackName}`"
      :media="mediaQuery"
      :srcset="`https://roellin-garten.rokka.io/${stackName}/${image} 1x`"
    >
    <img
      :src="`https://roellin-garten.rokka.io/${selectedStackDefault}/${image}`"
      :alt="alt"
      class="w-full h-full object-cover object-center"
    >
  </picture>
</template>

<script lang="ts" setup>
const stacks = {
  hero: {
    '(min-width: 1280px)': 'hero_xl',
    '(min-width: 1024px)': 'hero_lg',
    '(min-width: 768px)': 'hero_md',
    'default': 'hero_sm',
  },
  static: {
    '(min-width: 1280px)': 'static_xl',
    '(min-width: 1024px)': 'static_lg',
    '(min-width: 768px)': 'static_md',
    'default': 'static_sm',
  },
  gallery_thumbnail: {
    'default': 'gallery_thumbnail',
  },
  gallery_large: {
    'default': 'gallery_large',
  },
}

const props = defineProps<{
  image: string
  stack: keyof typeof stacks
  alt: string
}>()

const selectedStack = computed(() => {
  const selectedStack = { ...stacks[props.stack] }

  delete selectedStack.default

  return selectedStack
})

const selectedStackDefault = computed(() => {
  const selectedStack = { ...stacks[props.stack] }

  return selectedStack.default
})
</script>
