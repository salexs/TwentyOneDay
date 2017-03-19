export default function habits(state=[],action) {
  if (action.type === 'ADD_HABIT') {
    return [
      ...state,
      {
        parentId: action.payload.parentId,
        id: action.payload.id,
        text: action.payload.text
      }
    ];
  } else {
    return state;
  }
}
