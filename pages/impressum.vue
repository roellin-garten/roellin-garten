<template>
  <div class="container mx-auto">
    <FullScreenSection class="p-12">
      <h2 class="font-brand text-brand-700 text-3xl lg:text-5xl mb-12">
        Impressum
      </h2>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">Anschrift</h3>

      <address class="not-italic mb-12">
        <strong>Beat Röllin</strong><br />
        Oberdorfstrasse 1<br />
        8800 Thalwil<br />
        Tel. <a href="tel:0041447222953">044 722 29 53</a><br />
        Mobile: <a href="tel:0041794063247">079 406 32 47</a><br />
        Email: <a href="mailto:info@roellin-garten.ch">info@roellin-garten.ch</a><br />
      </address>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">
        Urheberrecht
      </h3>

      <p class="mb-12">
      Alle Inhalte &copy; {{ year }} Beat Röllin Gartenunterhalt und Gartenpflege
      </p>

      <h3 class="font-brand text-brand-700 mb-6 text-xl lg:text-2xl">
        Haftungsausschluss
      </h3>

      <p>
        Der Betreiber dieser Webseite bemüht sich, die auf der Website www.roellin-garten.ch bereit gestellten Informationen
        vollständig, aktuell und korrekt zu halten. Für die Richtigkeit, Vollständigkeit und Aktualität der Informationen
        auf der Website www.roellin-garten.ch sowie für Übermittlungsfehler übernimmt der Betreiber dieser Website keine Gewähr und
        lehnt jede Haftung für daraus resultierende Schäden oder Umtriebe ab, soweit sie nicht auf Vorsatz oder grobe
        Fahrlässigkeit vom Betreiber dieser Website zurückzuführen sind. Der Betreiber dieser Website übernimmt keine Gewährleistung
        für die Inhalte verknüpfter Websites Dritter und lehnt jede Haftung dafür ab. Aufgrund der technischen
        Besonderheiten des Internets übernimmt der Betreiber dieser Website keine Garantie für eine fehlerfreie oder
        unterbruchslose Erbringung der Dienstleistungen über das Internet. Der Betreiber dieser Website
        kann rechtswidrige Eingriffe in das EDV-System oder eine missbräuchliche Verwendung der vom Betreiber dieser Website
        bekannt gegebenen Daten durch Unbefugte nicht ausschliessen und übernimmt keine Haftung für allfällige daraus
        entstandene Schäden. Der Betreiber dieser Website lehnt ausserdem jede Haftung für Schäden am EDV-System des Benutzers
        infolge Benutzung der Website www.roellin-garten.ch ab und haftet insbesondere nicht für Schäden, die am EDV-System des
        Benutzers durch Störprogramme, wie beispielsweise Viren, Würmer (worms) und Trojanische Pferde, entstehen können.
        Der Benutzer verwendet seine Hardware (inkl. Drucker), Betriebssoftware und Telekommunikationseinrichtungen für
        die Inanspruchnahme von der Betreiber dieser Website-Dienstleistungen auf eigene Kosten und Gefahr. Der Betreiber dieser Website
        ist nicht verpflichtet, bestimmte Software oder bestimmte Betriebsplattformern oder -systeme zu unterstützen oder
        deren Unterstützung in Zukunft aufrecht zu erhalten.
      </p>
    </FullScreenSection>
  </div>
</template>

<script lang="ts" setup>
const year = ref(new Date().getFullYear())
useHead({
  title: 'Impressum | Beat Röllin Gartenunterhalt und Gartenpflege',
  meta: [{
    name: 'robots',
    content: 'noindex',
  }]
})
</script>
