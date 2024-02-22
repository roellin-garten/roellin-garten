<template>
  <div>
    <div class="relative">
      <FullScreenSection class="relative lg:top-0 flex justify-center items-center overflow-hidden bg-brand-700">
        <ClientOnly>
          <RokkaImage
            v-for="(image, i) in randomImages"
            :image="image.src"
            :alt="image.alt"
            stack="hero"
            class="w-full h-full object-cover object-center absolute top-0 z-0 transition-all ease-in-out duration-700"
            :class="currentlyVisibleImage === i ? 'opacity-1' : 'opacity-0'"
          />
        </ClientOnly>
      </FullScreenSection>

      <div class="flex justify-center items-center md:min-h-screen lg:absolute lg:top-0 z-10 w-full">
        <div class="md:backdrop-blur-[15px] w-full bg-white/50 p-12 lg:mt-40">
          <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-8 md:mb-12">
            Willkommen bei Gartenunterhalt & Gartenpflege Beat Röllin
          </h2>

          <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-8 md:mb-12 md:font-bold">
            Seit {{ yearsSince }} Jahren sind wir Ihr Partner für Gartenunterhalt und Gartenpflege in und um Thalwil.
          </p>

          <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-8 md:mb-12 font-bold">
            Möchten Sie eine Offerte? Nehmen Sie mit uns Kontakt auf!
          </p>

          <ul class="flex flex-wrap gap-2 lg:gap-5">
            <li>
              <a href="tel:0041447222953">
                <RButton>
                  <RIcon icon="phone" />
                  Unverbindlich anrufen
                </RButton>
              </a>
            </li>
            <li>
              <a href="mailto:info@roellin-garten.ch">
                <RButton>
                  <RIcon icon="envelope" />
                  Kontakt via Email
                </RButton>
              </a>
            </li>
            <li>
              <nuxt-link to="/galerie">
                <RButton>
                  <RIcon icon="tree" />
                  Mehr Bilder ansehen
                </RButton>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <FullScreenSection class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
      <div class="h-full md:col-span-2 lg:col-span-1">
        <RokkaImage
            image="be7080fc28774ef8e33486dc503f7812163075cd.jpg"
            stack="static"
            class="object-cover object-center w-full h-full"
            alt="Beat Röllin bei der Arbeit"
        />
      </div>
      <div class="bg-brand-700 p-12 flex flex-col justify-center">
        <h2 class="font-brand text-3xl lg:text-5xl text-white mb-8 md:mb-12">
          Hallo, mein Name ist Beat Röllin
        </h2>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-8 md:mb-12">
          Seit 1995 bin ich selbstständig als Unternehmer im Gartenunterhalt und der
          Gartenpflege tätig. Mein Team und ich haben zahlreiche zufriedene Kunden in
          und um Thalwil. Viele davon bereits seit vielen Jahren.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-8 md:mb-12">
          Als Chef ist es mir wichtig, persönlich bei Ihnen vorbei zu kommen. Qualität
          liegt meinem Team und mir am Herzen und wir verrichten unsere Arbeit mit Leidenschaft.
          Gerne auch mal mit einem Spässchen.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-8 md:mb-12">
          Falls Sie mit mir direkt Kontakt aufnehmen möchten, beispielsweise für Fragen
          zum Auftrag oder bei Notfällen, so erreichen Sie mich unter der Nummer: <a class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap" href="tel:0041794063247">079 406 32 47</a>
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-8 md:mb-12">
          Falls Sie Fragen zu Ihrer Rechnung haben, eine Offerte möchten oder sonstige organisatorische
          Anliegen haben, wenden Sie sich bitte an unser Büro unter der Nummer
          <a class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap" href="tel:0041447222953">044 722 29 53</a> oder per Email an <a class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap" href="mailto:info@roellin-garten.ch">info@roellin-garten.ch</a>
        </p>
      </div>
    </FullScreenSection>

    <FullScreenSection class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
      <div class="bg-white p-12 flex flex-col justify-center">
        <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-8 md:mb-12">
          Ihr Garten-Partner in Thalwil
        </h2>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-8 md:mb-12">
          Egal ob Rabatten setzen, Böschungen jäten, Bäume schneiden, Auffrischen und neu bepflanzen von Balkontrögen, oder den Dachgarten in Schuss halten. Wir helfen!
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-8 md:mb-12">
          Wir machen auch Rasenarbeiten wie Mähen, Düngen, Vertikutieren, oder legen neue Wege an.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-8 md:mb-12">
          Wir schneiden, setzen und pflegen auch Bäume, Hecken und Sträucher, unterhalten Ihren Gartensitzplatz, richten Stufen, oder erneuern sie.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-8 md:mb-12">
          Alle Arbeiten für Ihre Wohlfühloase aus einer Hand. Fragen Sie uns nach einer Offerte!
        </p>

        <ul class="flex flex-wrap gap-2 lg:gap-5 justify-end">
          <li>
            <a href="tel:0041447222953">
              <RButton>
                <RIcon icon="phone" />
                Unverbindlich anrufen
              </RButton>
            </a>
          </li>
          <li>
            <a href="mailto:info@roellin-garten.ch">
              <RButton>
                <RIcon icon="envelope" />
                Kontakt via Email
              </RButton>
            </a>
          </li>
          <li>
            <nuxt-link to="/galerie">
              <RButton>
                <RIcon icon="tree" />
                Mehr Bilder ansehen
              </RButton>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="h-full md:col-span-2 lg:col-span-1">
        <RokkaImage
          image="91c199b6f7a0abfaeba3aa69779c95abc0295f17.jpg"
          stack="static"
          class="object-cover object-center w-full h-full"
          alt="Beat Röllin bei der Arbeit"
        />
      </div>
    </FullScreenSection>

    <div class="relative">
      <div class="flex justify-center items-center lg:min-h-screen lg:absolute lg:top-0 z-10 w-full">
        <div class="md:backdrop-blur-[15px] w-full bg-white/50 p-12 lg:mt-40">
          <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl">
            Wir freuen uns darauf, auch bald Ihren Garten unterhalten und pflegen zu dürfen!
          </h2>
        </div>
      </div>
      <FullScreenSection class="h-screen">
        <RokkaImage
          image="81aa456ba846e6fc5656ab9371e9899fec777518.jpg"
          stack="hero"
          class="object-cover object-center w-full h-full"
          alt="Beat Röllin und sein Team bei der Arbeit"
        />
      </FullScreenSection>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = [
  { src: 'cc1d01374af7f5b6a9d7a0e010839bff3678d3b5.jpg', alt: 'Eine Rabatte mit Wiese - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: 'a81ae774fc1e385d88fff8953a58a96412d2fd1a.jpg', alt: 'Ein mit Rosen verzierter Zaun - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: 'bee308d5fa494b2a41f4a7f9c2a3179b548e2aca.jpg', alt: 'Ein mit Rosen verzierter Zaun - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: '66d6fbe045316f4983d7ee6ca5bad658abcaf69d.jpg', alt: 'Diverse Blumen - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: 'a9eacf1dbbee87ff31954428938f583c31f59ef8.jpg', alt: 'Diverse Blumen - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: 'a53e6d02b00f60e56898b4d28076815b03c3d51e.jpg', alt: 'Diverse Blumen, ein Vogelhaus, ein paar Bäume und Sträucher und ein saftiger Rasen - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: '3e717e4ccb2376919c91ef5f6c56d8c02bf83a29.jpg', alt: 'Ein mit allerlei Blumen und Rosen verzierter Zaun - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: 'fb1d09680b9a5b6e7e204a23df32402ace4c534a.jpg', alt: 'Ein mit Rosen verzierter Bogen - mit Liebe gepflegt von Beat Röllin und seinem Team' },
  { src: 'bd5e5895d5a90069b3b5d6c051034b91a87a0aae.jpg', alt: 'Beat Röllin bei der Arbeit - Beim Baumstutzen' },
  { src: 'f0df3d4e653df9ad253dda5b09bb9485e2bf0a62.jpg', alt: 'Eine wunderschöne Pergola im Sonnenlicht - mit Liebe gebaut von Beat Röllin und seinem Team' },
]

const randomImages = computed(() => {
  return images.sort(() => {
    return Math.random() > 0.5 ? 1 : -1
  })
})

const yearsSince = computed(() => {
  const today = new Date().getFullYear()

  return today - 1995
})

useHead({
  title: 'Beat Röllin Gartenunterhalt und Gartenpflege',
  meta: [{
    name: 'description',
    content: 'Beat Röllin Gartenunterhalt und Gartenpflege - Ihr Garten-Partner in Thalwil. Seit ' + yearsSince.value + ' Jahren.',
  }, {
    name: 'keywords',
    content: 'Garten,Thalwil,Gartenunterhalt,Gartenpflege,Beat,Röllin,Gartensitzplatz,Pflanzen,Hecke,Rabatten,Vertikutieren,Säen,Mähen,Düngen',
  }]
})

let interval: NodeJS.Timeout|null = null

const currentlyVisibleImage = ref(0)
onMounted(() => {
  interval = setInterval(() => {
    currentlyVisibleImage.value = (currentlyVisibleImage.value + 1) % images.length
  }, 8000)
})

onBeforeUnmount(() => {
  if (interval !== null) {
    clearInterval(interval)
    interval = null
  }
})
</script>
