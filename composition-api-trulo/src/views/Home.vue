<template>
  <div>
    <button @click="score++">{{ score }}</button>
  </div>
  <p>{{ dude }}</p>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'

export default {
  setup() {
    const state = reactive({
      score: 0,
      dude: 'Ahoj',
    })

    onMounted(() => {
      state.score = 100
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>
