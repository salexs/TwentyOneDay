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
