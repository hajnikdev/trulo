<template>
  <div>
    <button @click="score++">{{ score }} score double = {{ double }}</button>
  </div>
  <p>{{ hello }}</p>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    /**  vyhoda zgrupovania casti kodu teda vlastna organizacia kodu*/

    // data
    const score = ref(0)
    const dude = ref('Bulma')

    // computed (v3computed)
    const double = computed(() => score.value * 2)
    const hello = computed(() => 'Hello, I am ' + dude.value)

    return { score, double, hello }
  },
}
</script>
