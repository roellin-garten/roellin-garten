<template>
  <header class="bg-white border-b border-brand-600 p-5 sticky sm:fixed top-0 w-full items-center grid grid-cols-[1fr_1fr] gap-2 z-20">
    <nuxt-link to="/">
      <img
        src="../public/images/logo.jpg"
        alt="Gartenunterhalt und Gartenpflege Beat Röllin Logo"
        class="w-full h-auto transition-all duration-200 ease-in-out grow shrink"
        :class="{
          'max-w-[160px] sm:max-w-[250px]': !isCollapsed,
          'sm:max-w-[120px]': isCollapsed,
        }"
      >
    </nuxt-link>

    <h1 class="sr-only">
      Gartenunterhalt und Gartenpflege Beat Röllin
    </h1>

    <nav class="shrink-0 grow-1">
      <ul class="flex flex-wrap gap-2 lg:gap-5 justify-end">
        <li>
          <a href="tel:0041447222953">
            <RButton :small="isCollapsed">
              <font-awesome-icon icon="fa-solid fa-phone" />
              Unverbindlich anrufen
            </RButton>
          </a>
        </li>
        <li>
          <a href="mailto:info@roellin-garten.ch">
            <RButton :small="isCollapsed">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              Kontakt via Email
            </RButton>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const scrollPos = ref(0)
const scrollDelta = ref(0)

const onScroll = function () {
  const currentScrollY = window.scrollY

  scrollDelta.value = scrollPos.value - currentScrollY
  scrollPos.value = currentScrollY
}

const isCollapsed = computed(() => {
  return scrollPos.value > 0 && scrollDelta.value < 0
})


onMounted(() => {
  window.addEventListener('scroll', onScroll, {
    passive: true,
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
