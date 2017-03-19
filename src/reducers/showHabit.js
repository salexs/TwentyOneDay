export default function showHabit(state='',action) {
    if (action.type === 'SHOW_HABIT') {
      console.log('action.payload.parentId',action.payload.parentId)
      return action.payload.parentId
    }else {
      return state
    }
}
