<template>
  <main
    class="flex min-h-screen bg-purple-500 lg:bg-gradient-to-r from-red-400 to-pink-400"
  >
    <div class="sm:flex items-start w-screen px-4 py-10 overflow-x-auto">
      <List
        v-for="list in lists"
        :id="list.id"
        :title="list.title"
        :cards="list.cards"
        :key="list.id"
      />

      <ListCreateForm @new-list-coming="addNewList($event, lists)" />
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { data } from '../data.js'
import List from '../components/List.vue'
import ListCreateForm from '../components/ListCreateForm.vue'

// functions
import { addNewCard } from '../cards'
import { addNewList } from '../lists'

export default {
  components: {
    List,
    ListCreateForm,
  },
  setup() {
    const lists = ref(data)

    //events
    onMounted(() => {
      window.eventBus.on('new-card-coming', (event) =>
        addNewCard(event, lists.value)
      )
    })
    return {
      lists,
      addNewList, // nevyhnutne sem pridat metodu do ako vystup
    }
  },
}
</script>
