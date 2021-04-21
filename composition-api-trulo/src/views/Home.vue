<template>
  <div>
    <button @click="score++">{{ score }}</button>
  </div>
  <p>{{ dude }}</p>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    /** Tvorba state za pomoci reactive */

    const state = reactive({
      score: 69,
      dude: 'Bulma',
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>
