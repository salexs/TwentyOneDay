export default function habits(state=[],action) {
  if (action.type === 'ADD_HABBIT') {
    return [
      ...state,
      {
        text: action.text,
        parentId:action.aimID,
        time: action.text
      }
    ];
  } else {
    return state;
  }
}
