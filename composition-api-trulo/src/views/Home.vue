<template>
  <div>
    <button @click="state.score++">{{ state.score }}</button>
  </div>
  <p>{{ state.dude }}</p>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    /** Tvorba state za pomoci reactive */

    const state = reactive({
      score: 69,
      dude: 'Bulma',
    })

    return { state }
  },
}
</script>
