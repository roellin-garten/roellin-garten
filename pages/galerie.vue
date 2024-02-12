<template>
  <FullScreenSection class="p-12">
    <div class="container mx-auto">
      <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-12">
        Galerie
      </h2>
      <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <li
          v-for="(image, i) in 45"
          :key="i"
          class="aspect-[1/1]"
        >
          <a
            :href="`/images/gallery/original_${image}.jpg`"
            target="_blank"
          >
            <img
              :src="`/images/gallery/thumbnail_${image}.jpg`"
              class="object-cover object-center w-full h-full rounded hover:opacity-70 transition-all ease-in-out duration-250"
              alt=""
              loading="lazy"
            >
          </a>
        </li>
      </ul>
    </div>
  </FullScreenSection>
</template>

<script lang="ts" setup>
const year = ref(new Date().getFullYear())
useHead({
  title: 'Galerie | Beat Röllin Gartenunterhalt und Gartenpflege',
  meta: [{
    name: 'description',
    content: 'Bildergalerie der Arbeiten von Beat Röllin Gartenunterhalt und Gartenpflege',
  }, {
    name: 'keywords',
    content: 'Garten,Thalwil,Gartenunterhalt,Gartenpflege,Beat,Röllin,Gartenbau,Gartensitzplatz,Pflanzen,Hecke,Rabatten,Vertikutieren,Säen,Mähen,Düngen,Bilder,Bildergalerie,Arbeit',
  }]
})
</script>
