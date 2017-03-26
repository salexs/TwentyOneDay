
export function onAddHabit (id,habit) {
      const payload = {
        parentId:id,
        id: Date.now().toString(),
        text: habit
      }
      return {
          type: 'ADD_HABIT',
          payload: payload
      }
}
export function showHabit (id) {
      const payload = {
        parentId:id
      }
      return {
          type: 'SHOW_HABIT',
          payload: payload
      }
}

export function openModal() {
  return {
      type: 'OPEN_HABBIT_CREATE'
  }
}
