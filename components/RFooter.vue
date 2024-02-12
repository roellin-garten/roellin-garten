<template>
  <footer class="bg-brand-700 grid-cols-1 grid md:grid-cols-2 text-white">
    <address class="not-italic p-10">
      <strong>Beat Röllin</strong><br />
      Oberdorfstrasse 1<br />
      8800 Thalwil<br />
      Tel. <a href="tel:0041447222953">044 722 29 53</a><br />
      Mobile: <a href="tel:0041794063247">079 406 32 47</a><br />
      Email: <a href="mailto:info@roellin-garten.ch">info@roellin-garten.ch</a><br />
    </address>
    <div class="md:text-right p-10">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/impressum" class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100">Impressum</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/datenschutz" class="border-b border-white hover:border-b-2 transition-all ease-in-out duration-100">Datenschutz</nuxt-link>
          </li>
          <li>
            &copy; {{ year }} Beat Röllin Gartenunterhalt und Gartenpflege
          </li>
        </ul>
      </nav>
    </div>
    <div class="md:col-span-2 relative pt-[60px] w-full overflow-y-hidden overflow-x-hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto mb-[-1px] text-brand-200"
          :class="`aspect-[${aspectRatio}]`"
          :viewBox="`0 0 ${svgWidth} ${grassBladeHeight}`"
          version="1.1">
        <path :d="grassBladePath" fill="currentColor" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83.5"
        height="67.3"
        viewBox="0 0 835 673"
        version="1.1"
        class="absolute bottom-[5px] translate-x-[-50%]"
        :class="isAnimatingForward ? '' : 'left-[-83.5px]'"
        :style="isAnimatingForward ? `left: ${animationProgressPercentage * 100}%` : ''"
      >
        <path d="M 59.285 34.230 L 26 67.460 26 48.180 C 26 27.294, 25.557 25.156, 20.385 21.088 C 17.111 18.513, 10.014 18.289, 6.414 20.648 C 1.063 24.154, 0.998 24.715, 1.020 67.200 L 1.041 106.500 13.164 119 C 19.832 125.875, 51.435 157.842, 83.394 190.037 C 157.692 264.885, 249.781 357.833, 274.932 383.361 L 294.500 403.222 186.750 402.672 C 98.041 402.219, 79 402.354, 79 403.438 C 79 404.162, 83.781 428.547, 89.624 457.627 C 95.467 486.707, 100.613 512.525, 101.059 515 C 102.549 523.276, 105.906 539.240, 106.223 539.557 C 106.677 540.010, 127.993 544.081, 163.500 550.497 C 180.550 553.577, 196.525 556.505, 199 557.004 C 201.475 557.502, 207.325 558.600, 212 559.445 C 216.675 560.289, 225.610 561.927, 231.855 563.084 C 238.101 564.242, 243.559 564.809, 243.985 564.345 C 244.410 563.880, 245.318 561.700, 246.001 559.500 C 251.596 541.494, 267.436 521.075, 284 510.517 C 322.996 485.659, 371.821 492.067, 403.500 526.200 C 431.999 556.906, 436.053 603.191, 413.361 638.769 C 411.512 641.668, 410 644.480, 410 645.019 C 410 645.656, 459.037 646, 549.583 646 C 626.354 646, 689.017 645.662, 688.833 645.250 C 688.650 644.837, 686.841 641.575, 684.813 638 C 679.869 629.282, 676.127 617.395, 675.062 607.027 C 671.606 573.352, 688.306 542.497, 719.099 525.667 C 723.242 523.402, 722.051 522.530, 713.500 521.570 C 710.200 521.200, 705.025 520.492, 702 519.996 C 698.975 519.501, 691.325 518.374, 685 517.493 C 672.796 515.792, 662.279 514.194, 657.750 513.352 L 655 512.841 655 502.493 L 655 492.144 649.750 491.598 C 646.862 491.298, 638.763 490.770, 631.750 490.425 L 619 489.799 619 475.399 L 619 461 637.139 461 L 655.278 461 654.734 455 C 653.074 436.698, 631.637 421.998, 593 412.669 C 587.225 411.274, 580.447 409.840, 577.938 409.481 L 573.376 408.829 569.871 398.165 L 566.366 387.500 532.157 387.237 C 505.295 387.030, 497.860 387.245, 497.541 388.237 C 497.318 388.932, 496.170 392.241, 494.991 395.592 L 492.848 401.683 463.174 402.359 C 446.853 402.731, 429.113 403.320, 423.750 403.668 L 414 404.301 414 432.650 L 414 461 430.500 461 L 447 461 447 471.500 C 447 481.721, 446.940 482, 444.750 482.005 C 443.512 482.007, 433.725 480.829, 423 479.387 L 403.500 476.765 377.154 450.133 C 362.664 435.485, 327.547 400.100, 299.116 371.500 C 257.368 329.503, 35.942 106.254, 31.250 101.429 C 30.563 100.721, 30 99.771, 30 99.317 C 30 98.862, 47.782 80.718, 69.516 58.995 C 98.582 29.945, 109.271 18.641, 109.935 16.250 C 112.163 8.234, 106.236 1, 97.440 1 L 92.569 1 59.285 34.230 M 320.233 511.044 C 313.153 512.314, 300.714 517.198, 293.504 521.540 C 278.095 530.818, 266.105 545.422, 260.117 562.204 C 256.238 573.074, 255.500 577.532, 255.518 590 C 255.532 599.984, 255.995 604.097, 257.815 610.432 C 264.317 633.063, 280.492 652.316, 301.107 661.963 C 322.294 671.877, 347.706 671.877, 368.893 661.963 C 401.074 646.904, 420.332 609.842, 413.581 575.963 C 410.522 560.614, 406.140 551.022, 396.992 539.650 C 386.836 527.026, 375.131 519.061, 358.500 513.459 C 351.877 511.228, 348.348 510.707, 338 510.432 C 331.125 510.249, 323.130 510.524, 320.233 511.044 M 745.216 532.053 C 735.044 534.680, 723.292 541.081, 715.452 548.265 C 699.500 562.882, 691.694 580.540, 691.723 601.939 C 691.767 634.789, 714.528 663.164, 747.095 670.971 C 766.212 675.554, 785.897 671.870, 802.980 660.514 C 817.865 650.618, 828.719 634.732, 833.083 616.455 C 834.818 609.185, 834.625 592.659, 832.713 584.874 C 827.431 563.363, 811.166 543.988, 791.410 535.673 C 777.380 529.768, 759.491 528.366, 745.216 532.053 M 324.789 540.029 C 317.692 541.225, 306.130 547.282, 300.603 552.700 C 289.501 563.582, 284.686 574.898, 284.734 590 C 284.815 615.273, 301.438 634.798, 326.975 639.614 C 334.140 640.966, 335.860 640.966, 343.025 639.614 C 377.104 633.187, 395.110 598.474, 380.445 567.476 C 378.960 564.336, 374.869 558.719, 371.356 554.994 C 359.225 542.135, 343.081 536.947, 324.789 540.029 M 749.989 557.872 C 742.119 560.391, 735.992 564.258, 730.249 570.330 C 721.906 579.152, 718 588.924, 718 600.975 C 718 616.851, 725.050 630.193, 738.012 638.849 C 745.666 643.961, 753.485 646.288, 763 646.288 C 797.031 646.288, 818.578 610.536, 802.977 579.955 C 799.955 574.031, 791.698 565.541, 785.585 562.073 C 774.809 555.957, 761.044 554.333, 749.989 557.872 M 327.218 575.663 C 322.302 578.086, 319.665 582.458, 319.212 588.935 C 318.890 593.540, 319.232 595.101, 321.191 597.985 C 324.156 602.348, 330.417 605.967, 335 605.967 C 339.552 605.967, 345.846 602.352, 348.720 598.087 C 353.198 591.443, 350.664 580.428, 343.663 576.101 C 339.516 573.538, 331.939 573.336, 327.218 575.663 M 757.001 585.069 C 748.400 588.686, 744.556 599.047, 748.630 607.633 C 752.221 615.201, 764.104 618.426, 771.078 613.726 C 781.389 606.778, 781.740 594.046, 771.824 586.702 C 768.724 584.406, 760.684 583.520, 757.001 585.069" stroke="none" fill="currentColor" fill-rule="evenodd"/>
      </svg>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const animationProgressPercentage = ref(0)

const animationForwardDuration = ref(20)
const animationBackwardsDuration = ref(3)

const grassBladeWidth = 50
const grassBladeHeight = 150
const numberOfGrassBlades = ref(200)
const svgWidth = computed(() => numberOfGrassBlades.value * grassBladeWidth)
const aspectRatio = grassBladeHeight / svgWidth

const shouldAnimate = ref(true)

const grassBladePath = computed(() => {
  let grassBladePath = 'M '
  for (let i = 0; i < numberOfGrassBlades.value; i++) {
    const startX = i * grassBladeWidth
    const renderingProgressAt = i / numberOfGrassBlades.value

    grassBladePath += '\n'
    grassBladePath += startX + ' ' + grassBladeHeight + ' '

    if (renderingProgressAt < animationProgressPercentage.value) {
      grassBladePath += (startX + grassBladeWidth / 4) + ' ' + (grassBladeHeight / 2) + ' '
      grassBladePath += (startX + (grassBladeWidth / 4) * 3) + ' ' + (grassBladeHeight / 2) + ' '
    }

    grassBladePath += (startX + (grassBladeWidth / 2)) + ' 0 '
  }

  grassBladePath += `${svgWidth.value} ${grassBladeHeight} 0 ${grassBladeHeight}`

  return grassBladePath
})

let animationStart = new Date().getTime()
const isAnimatingForward = ref(true)

function animate() {
  const currentTime = new Date().getTime()
  const delta = (currentTime - animationStart) / 1000
  const currentlyTargetingDuration = isAnimatingForward.value ? animationForwardDuration.value : animationBackwardsDuration.value

  if (delta >= currentlyTargetingDuration) {
    isAnimatingForward.value = !isAnimatingForward.value
    animationStart = currentTime
  }

  let percentageAnimated = Math.round((isAnimatingForward.value ? delta / currentlyTargetingDuration : (currentlyTargetingDuration - delta) / currentlyTargetingDuration) * 1000) / 1000
  if (percentageAnimated < 0) {
    percentageAnimated = 1
  }

  if (percentageAnimated > 1) {
    percentageAnimated = 0
  }

  animationProgressPercentage.value = percentageAnimated

  if (shouldAnimate.value) {
    requestAnimationFrame(() => {
      animate()
    })
  }
}

function deductNumberOfGrassBladesAndDurationTime() {
  numberOfGrassBlades.value = Math.round(window.innerWidth / 10)
  animationForwardDuration.value = Math.round(window.innerWidth / 70) // Roughly 70 pixels per second
  animationBackwardsDuration.value = animationForwardDuration.value / 2
}

onMounted(() => {
  shouldAnimate.value = true

  window.addEventListener('resize', deductNumberOfGrassBladesAndDurationTime)
  deductNumberOfGrassBladesAndDurationTime()

  animate()
})

onBeforeUnmount(() => {
  shouldAnimate.value = false
})

const year = ref(new Date().getFullYear())
</script>
