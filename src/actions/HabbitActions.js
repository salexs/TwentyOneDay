
export function onAddHabit (habit,parentId) {

      return {
          type: 'ADD_HABBIT',
          id: Date.now().toString(),
          text: habit,
          aimID:parentId
      }
}

export function openModal() {
  return {
      type: 'OPEN_HABBIT_CREATE'
  }
}
