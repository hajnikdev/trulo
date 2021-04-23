export const addNewCard = (data, lists) => {
  let listForNewCard = lists.find((list) => list.id === data.listId)
  listForNewCard.cards.push({
    id: listForNewCard.cards.length
      ? Math.max(...listForNewCard.cards.map((card) => card.id)) + 1
      : 0,
    text: data.text,
  })
}
