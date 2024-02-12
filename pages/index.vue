<template>
  <div>
    <div class="relative">
      <FullScreenSection class="relative lg:top-0 flex justify-center items-center overflow-hidden bg-brand-700">
        <img
          v-for="(image, i) in randomImages"
          :key="image"
          :src="`/images/home/${image}`"
          class="w-full h-full object-cover object-center absolute top-0 z-0 transition-all ease-in-out duration-700"
          :class="currentlyVisibleImage === i ? 'opacity-1' : 'opacity-0'"
        >
      </FullScreenSection>

      <div class="flex justify-center items-center md:min-h-screen lg:absolute lg:top-0 z-10 w-full">
        <div class="md:backdrop-blur-lg w-full bg-white/50 p-12 lg:mt-40">
          <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-12">
            Willkommen bei Gartenunterhalt & Gartenpflege Beat Röllin
          </h2>

          <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-12">
            Seit {{ yearsSince }} Jahren sind wir Ihr Partner für Gartenunterhalt und Gartenpflege in und um Thalwil.
          </p>

          <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-12">
            <strong>Möchten Sie eine Offerte? Nehmen Sie mit uns Kontakt auf!</strong>
          </p>

          <ul class="flex flex-wrap gap-2 lg:gap-5">
            <li>
              <a href="tel:0041447222953">
                <RButton>
                  <font-awesome-icon icon="fa-solid fa-phone" />
                  Unverbindlich anrufen
                </RButton>
              </a>
            </li>
            <li>
              <a href="mailto:info@roellin-garten.ch">
                <RButton>
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                  Kontakt via Email
                </RButton>
              </a>
            </li>
            <li>
              <nuxt-link to="/galerie">
                <RButton>
                  <font-awesome-icon icon="fa-solid fa-tree" />
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
        <img src="../public/images/home/static_01.jpg" alt="Beat Röllin" class="object-cover object-center w-full h-full">
      </div>
      <div class="bg-brand-700 p-12 flex flex-col justify-center">
        <h2 class="font-brand text-3xl lg:text-5xl text-white mb-12">
          Hallo, mein Name ist Beat Röllin
        </h2>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-12">
          Seit 1995 bin ich selbstständig als Gartenbauunternehmer tätig.
          Mein Team und ich haben zahlreiche zufriedene Kunden in und um Thalwil. Viele
          davon bereits seit Jahren.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-12">
          Als Chef ist es mir wichtig, persönlich bei Ihnen vorbei zu kommen. Qualität
          liegt mir am Herzen und ich und mein Team verrichte meine Arbeit mit Leidenschaft.
          Gerne auch mal mit einem Spässchen.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-12">
          Falls Sie mit mir direkt Kontakt aufnehmen möchten, beispielsweise für Fragen
          zum Auftrag oder bei Notfällen, so erreichen Sie mich unter der Nummer: <a class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap" href="tel:0041794063247">079 406 32 47</a>
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-white mb-12">
          Falls Sie Fragen zu Ihrer Rechnung haben, eine Offerte möchten oder sonstige organisatorische
          Anliegen haben, wenden Sie sich bitte an unser Büro unter der Nummer
          <a class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap" href="tel:0041447222953">044 722 29 53</a> oder per Email an <a class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap" href="mailto:info@roellin-garten.ch">info@roellin-garten.ch</a>
        </p>
      </div>
    </FullScreenSection>

    <FullScreenSection class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
      <div class="bg-white p-12 flex flex-col justify-center">
        <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-12">
          Ihr Garten-Partner in Thalwil
        </h2>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-12">
          Egal ob Rabatten setzen, Böschungen jäten, Bäume schneiden, Auffrischen und neu bepflanzen von Balkontrögen, oder den Dachgarten in Schuss halten. Wir helfen!
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-12">
          Wir machen auch Rasenarbeiten wie Mähen, Düngen, Vertikutieren, oder legen neue Wege an.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-12">
          Wir schneiden, setzen und pflegen auch Hecken und Sträucher, unterhalten Ihren Gartensitzplatz, richten Stufen, oder erneuern sie.
        </p>

        <p class="text-base md:text-xl lg:text-2xl text-brand-700 mb-12">
          Alle Arbeiten um Ihre Wohlfühloase aus einer Hand. Fragen Sie uns nach einer Offerte!
        </p>

        <ul class="flex flex-wrap gap-2 lg:gap-5 justify-end">
          <li>
            <a href="tel:0041447222953">
              <RButton>
                <font-awesome-icon icon="fa-solid fa-phone" />
                Unverbindlich anrufen
              </RButton>
            </a>
          </li>
          <li>
            <a href="mailto:info@roellin-garten.ch">
              <RButton>
                <font-awesome-icon icon="fa-solid fa-envelope" />
                Kontakt via Email
              </RButton>
            </a>
          </li>
          <li>
            <nuxt-link to="/galerie">
              <RButton>
                <font-awesome-icon icon="fa-solid fa-tree" />
                Mehr Bilder ansehen
              </RButton>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="h-full md:col-span-2 lg:col-span-1">
        <img src="../public/images/home/static_03.jpg" alt="Beat Röllin bei der Arbeit" class="object-cover object-center w-full h-full">
      </div>
    </FullScreenSection>

    <div class="relative">
      <div class="flex justify-center items-center lg:min-h-screen lg:absolute lg:top-0 z-10 w-full lg:mt-40">
        <div class="md:backdrop-blur-lg w-full bg-white/50 p-12">
          <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl">
            Wir freuen uns darauf, auch bald Ihren Garten unterhalten und pflegen zu dürfen!
          </h2>
        </div>
      </div>
      <FullScreenSection class="h-screen">
        <img
            src="/images/home/static_02.jpg"
            class="w-full h-full object-cover object-center"
            alt="Beat Röllin und sein Team bei der Arbeit"
        >
      </FullScreenSection>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = [
  'slideshow_01.jpg',
  'slideshow_02.jpg',
  'slideshow_03.jpg',
  'slideshow_04.jpg',
  'slideshow_05.jpg',
  'slideshow_06.jpg',
  'slideshow_07.jpg',
  'slideshow_08.jpg',
  'slideshow_09.jpg',
  'slideshow_10.jpg',
]

const randomImages = computed(() => {
  return images.sort((a, b) => {
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
    content: 'Garten,Thalwil,Gartenunterhalt,Gartenpflege,Beat,Röllin,Gartenbau,Gartensitzplatz,Pflanzen,Hecke,Rabatten,Vertikutieren,Säen,Mähen,Düngen',
  }]
})

let interval: NodeJS.Timeout|null = null

const currentlyVisibleImage = ref(0)
onMounted(() => {
  interval = setInterval(() => {
    currentlyVisibleImage.value = (currentlyVisibleImage.value + 1) % images.length
    console.log(currentlyVisibleImage.value)
  }, 8000)
})

onBeforeUnmount(() => {
  if (interval !== null) {
    clearInterval(interval)
    interval = null
  }
})
</script>
