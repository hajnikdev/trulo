export const addNewList = (title, lists) => {
  if (!title) {
    return
  }

  lists.value.push({
    id: lists.length ? Math.max(...lists.map((list) => list.id)) + 1 : 0,
    title: title,
    cards: [],
  })

  console.dir(lists)
}
