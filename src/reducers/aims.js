const childIds = (state=[], action) => {
  switch (action.type) {
    case 'ADD_HABBIT':
      return [ ...state, action.id ]
    default:
      return state
  }
}

const Aim = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_AIM':
      return {
        id: action.aimID,
        text: action.text,
        active: false,
        childIds: [],
        date: action.date
      }
    case 'ADD_HABBIT':
      return {
        ...state,
        childIds: childIds(state.childIds, action)
      }
    case 'ACTIVE_AIM':
      var active = state.active;
      console.log(active)
      return {...state, active: !active };
    default:
      return state
  }
}


export default function aims(state = {}, action) {
  const {aimID} = action
  if (typeof aimID === 'undefined') {
    return state
  } else {
    return {
      ...state,
      [aimID]:Aim(state[aimID],action)
    }
  }
}
