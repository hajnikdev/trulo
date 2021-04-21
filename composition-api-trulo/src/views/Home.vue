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
    const state = reactive({
      score: 0,
      dude: 'Ahoj',
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>
