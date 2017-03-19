export default function aims(state = [], action) {
  if (action.type === 'ADD_AIM') {
    console.log('action.payload.id', action.payload.id)
    return [
      ...state,
      {
        id:action.payload.id,
        aim:action.payload.aim
      }
    ]
  } else {
    return state;
  }
}
