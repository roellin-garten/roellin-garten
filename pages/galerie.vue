<template>
  <FullScreenSection class="p-12">
    <div class="container mx-auto">
      <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-12">
        Galerie
      </h2>
      <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" ref="gallery">
        <li
          v-for="(image, i) in images"
          :key="i"
        >
          <a
            :href="`https://roellin-garten.rokka.io/gallery_large/${image.src}`"
            target="_blank"
            :data-pswp-width="image.w"
            :data-pswp-height="image.h"
            data-cropped="true"
            class="block w-full aspect-[1/1]"
          >
            <RokkaImage
              :image="image.src"
              :alt="image.alt"
              stack="gallery_thumbnail_original_aspect"
              class="object-cover object-center w-full h-full rounded hover:opacity-70 transition-all ease-in-out duration-250"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </div>
  </FullScreenSection>
</template>

<script lang="ts" setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

useHead({
  title: 'Galerie | Beat Röllin Gartenunterhalt und Gartenpflege',
  meta: [{
    name: 'description',
    content: 'Bildergalerie der Arbeiten von Beat Röllin Gartenunterhalt und Gartenpflege',
  }, {
    name: 'keywords',
    content: 'Garten,Thalwil,Gartenunterhalt,Gartenpflege,Beat,Röllin,Gartensitzplatz,Pflanzen,Hecke,Rabatten,Vertikutieren,Säen,Mähen,Düngen,Bilder,Bildergalerie,Arbeit',
  }]
})

const lightbox = ref<PhotoSwipeLightbox|null>(null)
const gallery = ref<HTMLElement|null>(null)

onMounted(() => {
  if (!lightbox.value && gallery.value !== null) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: gallery.value,
      children: 'a',
      showHideAnimationType: 'zoom',
      pswpModule: () => import('photoswipe'),
    })

    lightbox.value.init()

    console.log(lightbox.value)
  }
})

onBeforeUnmount(() => {
  if (lightbox.value !== null) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})

const images = [
  { src: 'f0df3d4e653df9ad253dda5b09bb9485e2bf0a62.jpg', alt: 'Pergola', w: 1280, h: 577, },
  { src: '210d337e20db6840b0f248a59b93d600e5a008a8.jpg', alt: 'Steinabsatz bei Terrsassen', w: 1280, h: 853, },
  { src: '5359de7145f2e97fc054d5ea6225b6467a204a6c.jpg', alt: 'Steinabsatz bei Terrsassen, Nahaufnahme', w: 1280, h: 853, },
  { src: '57a2a3b5d18dbe017f4be0d6e37166adaac59626.jpg', alt: 'Beat Röllin bei der Arbeit: Sträucher werden neu gesetzt', w: 1280, h: 854, },
  { src: 'ef30d5d469c62e0a06c415f256423c5062088e28.jpg', alt: 'Wir setzen Kopfsteinpflaster', w: 1280, h: 854, },
  { src: 'a2d8b2db0381154527a4e1ad3000c2c4c7917eb8.jpg', alt: 'Bunte Blumen, gsetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '50a8a65977a7829ee24f4c1e9c103028362e7da9.jpg', alt: 'Beat Röllin bei der Arbeit: Rasenmähen', w: 1280, h: 853, },
  { src: '045ff7af76b3f41b120f64ab99cca4fa4d9024ac.jpg', alt: 'Beat Röllin vor schön gestutzten Hecken', w: 1280, h: 853, },
  { src: '37ac732a7a165a977e9b31a890c60cd19cdb2a4e.jpg', alt: 'Beat Röllin und sein Team bei der Arbeit', w: 1280, h: 853, },
  { src: '06389c4fcbcd90163928b5706b534e8dcd314e93.jpg', alt: 'Beat Röllin baut einen neuen Gehweg', w: 1280, h: 853, },
  { src: 'a9823d41e09f53c9827414932e09317e8cb14fe6.jpg', alt: 'Der Gehweg in Nahaufnahme', w: 1280, h: 853, },
  { src: 'ed5ad57384057f48bb75d3ea69449cdb4d89860a.jpg', alt: 'Ein gesunder Nadelbaum - dank unserer Pflege', w: 1280, h: 853, },
  { src: '3b5ba02bcecdd6405adaa59378f147db25af6e44.jpg', alt: 'Bunte Blumen, gsetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '6a89a009bded8a71419fb913b9dec319e5748e50.jpg', alt: 'Ein mit Rosen verzierter Zaun', w: 1280, h: 853, },
  { src: 'dbd2d61f400f73b1f795fe801337c286e2c32493.jpg', alt: 'Ein mit Rosen verzierter Zaun', w: 1280, h: 853, },
  { src: '07e2510e67a55db9aa4d49b93b379f80f5fea5bb.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: 'b23ecb31ad9335eecd0a3391f406fe6e54b68ca4.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '0a8c5a04c721f1341a7ae52bb496bddf5cf47e00.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: 'ac6e2520afc717c172cdb77050478351eb7bfdfa.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: 'b3b86b5e44dbc128128799575840a2c821051738.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: 'b85c5a639e1b897eefdb27fa14498a03393a90f7.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '5303e1f74777d694c5ab568918912e24a9707008.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '91a24b2b3258fa0f388a445ece56b5d86aab952c.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '068526974515d5954bfb70d14227b1ddb0f6f768.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '56b6a8f2b84179b4273c64c884fa1fa85adff836.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '781a5a59d7a30e782a13a047d7ccf29c30dbff5f.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '8f1d1ca2ecad036cf1c8bcb385e88ac941026910.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '1876084456c71b798571e35eaff7b9b6abb4aac6.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '259be590d8f912b2745f98ca1ef00d0bbfda6afc.jpg', alt: 'Beat Röllin bei der Arbeit: Ein Baum wird mit dem Bagger ersetzt', w: 1280, h: 853, },
  { src: '4a38d28fcffedbe8b6f6be1c9915f1a23b57e50a.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: 'f1c7ab99186e55c02888454acc7f3403af3eecbb.jpg', alt: 'Beat Röllin bei der Arbeit: Ein Baum wird mit dem Bagger ersetzt', w: 1280, h: 854, },
  { src: '5462c685e18bbc743ec69fc910a7141d933ebad2.jpg', alt: 'Beat Röllin bei der Arbeit: Ein Baum wird mit dem Bagger ersetzt', w: 1280, h: 853, },
  { src: 'af5d8c6db74c90c35145baee24aa87c392662713.jpg', alt: 'Beat Röllin bei der Arbeit: Ein Baum wird mit dem Bagger ersetzt', w: 1280, h: 853, },
  { src: '92531561ff2b438a3c4ce085c7e55771eabde50d.jpg', alt: 'Neue Bäume, frisch gepflanzt', h: 1280, w: 853, },
  { src: 'b571c2687d9a044c4b673ba7ca8c11ec5654a97b.jpg', alt: 'Allerlei Blumen, gesetzt und gepflegt von Beat Röllin', w: 1280, h: 853, },
  { src: '01739b778d26fef36031ed54eb75e5c780973da9.jpg', alt: 'Beat Röllin bei der Arbeit: Beim Baumstutzen', w: 1280, h: 853, },
  { src: '0de79ef70f871962f24762fc814976bded556c17.jpg', alt: 'Beat Röllin bei der Arbeit: Beim Baumstutzen', w: 1280, h: 853, },
  { src: 'b66b56830c1cb8f1552c790d9102879a73384130.jpg', alt: 'Beat Röllin bei der Arbeit: Mit schwerem Gerät', w: 1280, h: 853, },
  { src: 'e5c7b4e9268b2cc90ee00f03fa7d432f77abda81.jpg', alt: 'Beat Röllin bei der Arbeit: Kurze Pause am Anhänger', w: 1280, h: 853, },
  { src: 'f2bb9e97256bba3b2785bd58f453f8c0a7fd0af3.jpg', alt: 'Unser Auto mit Anhänger', w: 1280, h: 853, },
  { src: 'f5a58fa89965782371c7c874421e7da816765ac3.jpg', alt: 'Unser Auto mit Anhänger', w: 1280, h: 853, },
  { src: '41b55068d874672079eb1d46d565e888241be76e.jpg', alt: 'Beat Röllin bei der Arbeit: Beim Heckenstutzen', w: 1280, h: 960, },
  { src: '47eb322a5911e054192e342317a66e7e31a3139f.jpg', alt: 'Beat Röllin bei der Arbeit: Beim Heckenstutzen', w: 1280, h: 960, },
  { src: 'd69d8034517280f26fd3b42328db968cf1e3fe6b.jpg', alt: 'Beat Röllin im Baum', w: 1280, h: 853, },
  { src: '59edb62f1d6dbceb743cfd40ddec36c455f31f51.jpg', alt: 'Beat Röllin im Baum', w: 1280, h: 854, },
  { src: 'bc8f6d9cc97ddbbca193e9711792bd10faed2f8f.jpg', alt: 'Beat Röllin im Baum', w: 1280, h: 853, },
]
</script>
