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

export function openModal() {
  return {
      type: 'OPEN_AIM_CREATE'
  }
}

export function returnStatus() {
  return {
      type: 'RETURN_STATUS'
  }
}
