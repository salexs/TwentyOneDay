import axios from 'axios'
export function onAddHabit (id,habit) {
      const payload = {
        parentId:id,
        id: Date.now().toString(),
        text: habit
      }
      const data = habit
      axios.post('http://localhost:3011/habbit',data);
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
export function onAddAim (aim) {
  const payload = {
    id: Date.now().toString(),
    aim
  }
  return {
      type: 'ADD_AIM',
      payload: payload
  }
}
