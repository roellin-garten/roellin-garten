<template>
  <FullScreenSection class="p-12">
    <div class="container mx-auto">
      <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-12">
        Datenschutz
      </h2>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">
        Geltungsbereich
      </h3>

      <p class="mb-12">
        Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung
        personenbezogener Daten durch den verantwortlichen Anbieter "Beat Röllin Gartenunterhalt & Gartenpflege" auf
        dieser Website (im folgenden "Angebot") auf.
      </p>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">
        Kontaktaufnahme
      </h3>

      <p class="mb-12">
        Bei der Kontaktaufnahme mit dem Anbieter (zum Beispiel per Telefon oder E-Mail) werden die Angaben des Nutzers zwecks
        Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen entstehen, gespeichert.
      </p>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">
        GitHub Pages
      </h3>

      <p class="mb-12">
        Diese Website wird als eine GitHub Pages-Website gehostet. GitHub kann personenbezogene Benutzerdaten von Besuchern
        dieser GitHub Pages-Website erfassen, einschließlich Protokolle der IP-Adressen von Besuchern, um rechtlichen
        Verpflichtungen nachzukommen und die Sicherheit und Integrität dieser Website und des Dienstes zu gewährleisten.
        Weitere Informationen finden Sie in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" class="border-b border-brand-700 hover:border-b-2 transition-all ease-in-out duration-100 whitespace-nowrap">GitHub-Datenschutzerklärung</a>.
      </p>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">
        Widerruf, Änderungen, Berichtigungen und Aktualisierungen
      </h3>

      <p class="mb-12">
        Der Nutzer hat das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die personenbezogenen Daten, die über ihn gespeichert wurden. Zusätzlich hat der Nutzer das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung seiner personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.
      </p>
    </div>
  </FullScreenSection>
</template>

<script lang="ts" setup>
const year = ref(new Date().getFullYear())
useHead({
  title: 'Datenschutz | Beat Röllin Gartenunterhalt und Gartenpflege',
  meta: [{
    name: 'robots',
    content: 'noindex',
  }]
})
</script>
